import { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ColorValue, SpaceValue, defaultTheme } from '@aws-amplify/ui';
import { ButtonTokens as WebButtonTokens } from '@aws-amplify/ui/dist/types/theme/tokens/components/button';

interface ButtonTextToken extends Omit<TextStyle, 'fontSize'> {
  fontSize?: SpaceValue | number | undefined;
}

// Some space values (borderWidth, borderRadius) cannot be strings
// in the RN type, but we would need to allow strings in order to support
// references
interface ButtonContainerToken extends Omit<ViewStyle,'borderWidth'> {
  borderWidth?: SpaceValue | number | undefined;
}

// This won't work...
// interface NewButtonContainerToken extends ViewStyle, Omit<WebButtonTokens, '_hover'> {
  
// }

export interface ButtonTokens {
  container: ButtonContainerToken;
  disabled: ViewStyle;
  text: ButtonTextToken;
  disabledText: TextStyle;
}


export interface NewButtonTokens {}

const buttonTokens = defaultTheme.tokens.components.button;
console.log(buttonTokens.borderColor);

export const button: ButtonTokens = {
  container: {
    // default button has no background color
    backgroundColor: 'transparent',
    // This will be difficult because there are inter-component references
    // these reference a 'fieldcontrol' component, which if not included
    // will return undefined. One fix would be to move the fieldcontrol tokens
    // up out of 'components'
    borderColor: buttonTokens.borderColor.value,
    borderWidth: buttonTokens.borderWidth.value,
  },
  text: {
    color: buttonTokens.color.value,
    fontSize: buttonTokens.fontSize.value,
  },
  disabled: {
    backgroundColor: buttonTokens._disabled.backgroundColor.value,
  },
  disabledText: {
    color: buttonTokens._disabled.color.value,
  },
};
