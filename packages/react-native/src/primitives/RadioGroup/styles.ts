import { StyleSheet } from 'react-native';

import { StrictTheme } from '../../theme';
import { RadioGroupStyles } from './types';

export const getThemedStyles = (theme: StrictTheme): RadioGroupStyles => {
  const { components } = theme.tokens;

  return StyleSheet.create({
    container: {
      ...components?.radiogroup.container,
    },
    label: {
      /**
       * The RadioGroup label inherits its styles from the Label primitive,
       * and also supports customization via a Theme.
       */
      ...components?.radiogroup.label,
    },
  });
};