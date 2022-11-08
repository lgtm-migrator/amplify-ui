import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

// TODO: clean up with theming
interface VerifyUserStyle {
  buttonPrimary: ViewStyle;
  buttonPrimaryLabel: TextStyle;
  buttonSecondary: ViewStyle;
  buttonSecondaryLabel: TextStyle;
}

export const styles: VerifyUserStyle = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: 'teal',
    marginVertical: 8,
    paddingVertical: 12,
  },
  buttonPrimaryLabel: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  buttonSecondary: {
    marginVertical: 8,
    paddingVertical: 12,
  },
  buttonSecondaryLabel: { color: 'teal' },
});