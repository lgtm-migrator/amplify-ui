import { StyleSheet } from 'react-native';

import { ReactNativeTheme } from '../../theme';
import { ButtonStyles } from './types';

export const baseStyles: ButtonStyles = StyleSheet.create({
  container: { borderWidth: 1, borderRadius: 4, padding: 8 },
  text: { alignSelf: 'center' },
  disabled: {
    opacity: 0.8,
  },
});

export const getThemedStyles = (theme: ReactNativeTheme): ButtonStyles => {
  return StyleSheet.create({
    // we don't necessarily need to cast here, but we need 'input' and 'output'
    // types for the theme since createTheme will modify the types of tokens
    // This is what we do on the web, Theme is the input and WebTheme is the output
    ...theme.tokens.components.button as ButtonStyles,
  });
};
