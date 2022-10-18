import { Theme, BaseTheme } from '@aws-amplify/ui';

export type ColorMode = 'light' | 'dark' | 'system';


/**
 * ReactNativeTheme is a fully built theme that has styling based
 * on the design tokens and all design tokens have added fields
 * to be used in Javascript/Typescript.
 */
export interface ReactNativeTheme extends BaseTheme {
  colorMode?: ColorMode;
}

export type Tokens = BaseTheme['tokens'];

export { Theme }
