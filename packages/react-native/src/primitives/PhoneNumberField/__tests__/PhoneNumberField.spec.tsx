import React from 'react';
import { render } from '@testing-library/react-native';

import PhoneNumberField from '../PhoneNumberField';

const testID = 'phoneNumberInput';
const defaultProps = {
  testID,
};

// TODO: add more tests

describe('PhoneNumberField', () => {
  it('renders as expected', () => {
    const { toJSON, getByTestId } = render(
      <PhoneNumberField {...defaultProps} />
    );
    expect(toJSON()).toMatchSnapshot();

    const textInput = getByTestId(testID);
    expect(textInput.props.keyboardType).toBe('phone-pad');
    expect(textInput.props.editable).toBe(true);
    expect(textInput.props.accessible).toBe(true);
  });

  it('renders as expected when disabled', () => {
    const { toJSON, getByTestId } = render(
      <PhoneNumberField {...defaultProps} disabled />
    );
    expect(toJSON()).toMatchSnapshot();
    const textInput = getByTestId(testID);
    expect(textInput.props.editable).toBe(false);
  });

  it('renders as expected with formatValue', () => {
    const formatValue = (value: string | undefined) => {
      return `+${value}`;
    };
    const { toJSON, getByTestId } = render(
      <PhoneNumberField
        {...defaultProps}
        formatValue={formatValue}
        value="123"
      />
    );
    expect(toJSON()).toMatchSnapshot();
    const textInput = getByTestId(testID);
    expect(textInput.props.value).toBe('+123');
  });

  it('renders as expected without formatValue', () => {
    const { toJSON, getByTestId } = render(
      <PhoneNumberField {...defaultProps} value="1 2 3" />
    );
    expect(toJSON()).toMatchSnapshot();
    const textInput = getByTestId(testID);
    expect(textInput.props.value).toBe('+123');
  });
});
