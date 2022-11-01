import React from 'react';

import { TextField } from '../TextField';
import { PhoneNumberFieldProps } from './types';
import { styles } from './styles';

// replace whitespace and add +
const phoneMask = (value: string | undefined) =>
  value ? `+${value.replaceAll(/\s/g, '')}` : '';

export default function PhoneNumberField({
  disabled,
  formatValue,
  fieldStyle,
  ...rest
}: PhoneNumberFieldProps): JSX.Element | null {
  return (
    <TextField
      {...rest}
      disabled={disabled}
      keyboardType="phone-pad"
      style={[styles.inputContainer, fieldStyle]}
      formatValue={formatValue ?? phoneMask}
    />
  );
}
