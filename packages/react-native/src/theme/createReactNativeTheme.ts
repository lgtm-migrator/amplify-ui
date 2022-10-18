// Internal Style Dictionary methods
import deepExtend from 'style-dictionary/lib/utils/deepExtend';
import resolveObject from 'style-dictionary/lib/utils/resolveObject';
import usesReference from 'style-dictionary/lib/utils/references/usesReference';

import { defaultTheme } from './defaultTheme';
import { ColorMode, Theme, ReactNativeTheme } from './types';
import { DesignToken } from '@aws-amplify/ui';
import { Tokens } from './types';

// This is pretty much the same as the setupTokens in ui package
function setupTokens(obj: any, path?: Array<any>) {
  let tokens = {};
  path = path || [];

  if (obj.hasOwnProperty('value')) {
    return transformValue(obj);
  } else if (typeof obj === 'object') {
    for (const name in obj) {
      if (obj.hasOwnProperty(name)) {
        if (typeof obj[name] !== 'object') {
          tokens[name] = obj[name];
        } else {
          tokens[name] = setupTokens(obj[name], path.concat(name));
        }
      }
    }
  }

  return tokens;
}

function transformValue(token: DesignToken) {
  const { value } = token;
  if (usesReference(value)) {
    return token;
  } else if (typeof value === 'string') {
    if (value.includes('rem')) {
      return {value: Math.round( parseFloat(value.replace('rem','')) * 16)};
    }
    if (value.includes('px')) {
      return {
        value: Math.round(parseFloat(value.replace('px','')))
      }
    }
  }
  return token;
}

/**
 * This will be used like `const myTheme = createReactNativeTheme({})`
 * `myTheme` can then be passed to a Provider
 * const myTheme = createReactNativeTheme({})
 * const myOtherTheme = createReactNativeTheme({}, myTheme);
 */
export const createReactNativeTheme = (
  theme?: Theme,
  colorMode?: ColorMode
): ReactNativeTheme => {
  // merge theme and defaultTheme to get a complete theme
  // deepExtend is an internal Style Dictionary method
  // that performs a deep merge on n objects.
  const mergedTheme: ReactNativeTheme = deepExtend([
    {},
    defaultTheme,
    theme,
  ]) as ReactNativeTheme;
  let { name, overrides, breakpoints, tokens } = mergedTheme;

  let appliedOverrides = mergedTheme.overrides?.filter(override => {
    if ('colorMode' in override) {
      return override.colorMode === colorMode;
    }
  });
  
  if (appliedOverrides && appliedOverrides.length > 0) {
    tokens = deepExtend([
      {},
      tokens,
      ...appliedOverrides.map(override => override.tokens)
    ]) as Tokens;
  }
  
  // Resolve token references
  tokens = resolveObject(
    setupTokens(tokens)
  );

  return {
    colorMode,
    name,
    tokens,
    // keep overrides separate from base theme
    // allows RN to dynamically switch themes in a provider.
    overrides,
    breakpoints
  };
};
