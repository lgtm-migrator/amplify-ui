import React from 'react';
import { Pressable, Text } from 'react-native';

import { usePressableStyles, useTheme } from '../../hooks';
import { getThemedStyles } from './styles';
import { ButtonProps } from './types';

export default function Button({
  accessibilityRole = 'button',
  children,
  disabled,
  style,
  textStyle,
  variation,
  ...pressableProps
}: ButtonProps): JSX.Element {
  const theme = useTheme();
  const themedButtonStyle = getThemedStyles(theme, variation);

  const containerStyle = usePressableStyles({
    disabled: disabled,
    disabledStyle: themedButtonStyle.disabled,
    // there should be pressed default styles
    style: style,
    themedStyle: themedButtonStyle.container,
  });

  return (
    <Pressable
      accessibilityRole={accessibilityRole}
      disabled={disabled}
      style={containerStyle}
      {...pressableProps}
    >
      {typeof children === 'string' ? (
        <Text style={[themedButtonStyle.text, textStyle]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
