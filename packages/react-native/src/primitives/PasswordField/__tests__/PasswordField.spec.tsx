import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import PasswordField from '../PasswordField';
import { icons } from '../../../assets';

const labelText = 'Label';
const testID = 'passwordInput';
const defaultProps = {
  testID,
  label: labelText,
};

describe('PasswordField', () => {
  it('renders as expected', async () => {
    const { toJSON, findAllByRole, getByTestId, getByText, getByRole } = render(
      <PasswordField {...defaultProps} />
    );
    expect(toJSON()).toMatchSnapshot();

    expect(await findAllByRole('text')).toHaveLength(1);
    const textInput = getByTestId(testID);
    expect(textInput.props.editable).toBe(true);
    expect(textInput.props.secureTextEntry).toBe(true);
    expect(textInput.props.accessible).toBe(true);
    const image = getByRole('image');
    expect(image.props.source).toBe(icons.visibilityOff);
    const label = getByText(labelText);
    expect(label).not.toBeNull();
  });

  it('toggles visibility', () => {
    const { getByRole, getByTestId } = render(
      <PasswordField {...defaultProps} />
    );

    const icon = getByRole('image');
    const textInput = getByTestId(testID);

    expect(icon.props.source).toBe(icons.visibilityOff);
    expect(textInput.props.secureTextEntry).toBe(true);
    fireEvent.press(icon);
    expect(icon.props.source).toBe(icons.visibilityOn);
    expect(textInput.props.secureTextEntry).toBe(false);
  });

  it('should be able to hide show password icon', () => {
    const { toJSON, queryByRole } = render(
      <PasswordField {...defaultProps} showPasswordButton={false} />
    );
    expect(toJSON()).toMatchSnapshot();
    const icon = queryByRole('button');
    expect(icon).toBe(null);
  });

  it('should be able to obscure text programmatically', () => {
    const { toJSON, getByTestId } = render(
      <PasswordField {...defaultProps} secureTextEntry={false} />
    );
    expect(toJSON()).toMatchSnapshot();

    const textInput = getByTestId(testID);
    expect(textInput.props.secureTextEntry).toBe(false);
  });

  it('renders as expected when disabled', () => {
    const { toJSON, getByTestId, getByRole } = render(
      <PasswordField {...defaultProps} disabled />
    );
    expect(toJSON()).toMatchSnapshot();
    const textInput = getByTestId(testID);
    expect(textInput.props.editable).toBe(false);
    const icon = getByRole('button');
    expect(icon.props.accessibilityState).toHaveProperty('disabled', true);
  });
});
