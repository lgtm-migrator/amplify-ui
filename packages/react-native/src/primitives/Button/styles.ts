import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { ReactNativeTheme } from '../../theme';
import { ButtonStyles } from './types';

type Variation = 'default' | 'primary' | 'link';

// need to accept variation / size?
// should this just accept all potential modifiers like disabled?
export const getThemedStyles = (theme: ReactNativeTheme, variation?: Variation): ButtonStyles => {
  const tokens = theme.tokens.components.button;
  const container: ViewStyle = {
    // if there was a way we could do this like ...button or something
    // sucks to have to parseInt here..
    borderWidth: parseInt(tokens.borderWidth.value),
    borderRadius: parseInt(tokens.borderRadius.value),
    borderColor: tokens.borderColor.value,
    paddingHorizontal: tokens.paddingInlineEnd.value,
    paddingVertical: tokens.paddingBlockEnd.value,
  };
  const text: TextStyle = {
    color: tokens.color.value,
    fontSize: parseInt(tokens.fontSize.value),
  };
  const disabled = {
  };
  
  // We would need to know what properties exist
  if (variation) {
    // no type-checking here because of [variation]
    container.backgroundColor = tokens[variation].backgroundColor.value;
    text.color = tokens[variation].color.value;
  }
  
  return StyleSheet.create({
    container,
    text,
    disabled,
  });
};
