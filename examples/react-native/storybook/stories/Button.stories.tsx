import React from 'react';
import { StyleProp, Text, TextStyle, useColorScheme, ViewStyle } from 'react-native';
import { action } from '@storybook/addon-actions';
import { color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Button } from '@aws-amplify/ui-react-native/dist/primitives';
import { ThemeProvider } from '@aws-amplify/ui-react-native/dist/ThemeProvider';
import { ColorMode, Theme } from '@aws-amplify/ui-react-native/dist/theme';
import { defaultDarkModeOverride } from '@aws-amplify/ui';

const customTheme: Theme = {
  // name: 'my-theme',
  tokens: {
    components: {
      button: {
        // the downside is now
        container: {
          // references work
          borderColor: '{colors.brand.secondary.80}',
          borderWidth: 5,
        },
        // text: {
        //   color: 'green',
        // },
      },
    },
    // the downside is theme definitions outside of the 'components' namespace
    // still need {value:''}
    // unless we say eff it and have the RN Theme type completely incompatible
    // if we make them incompatible then we need to recreate the entire theme
    // from scratch
    colors: {
      font: {
        primary: { value: 'hotpink' }
      }
    }
  },
};

const withDarkMode: Theme = {
  // name: 'with-dark-mode',
  overrides: [defaultDarkModeOverride]
}

const customDarkMode: Theme = {
  // name: 'custom-dark-mode',
  overrides: [{
    colorMode: 'dark',
    tokens: {
      colors: {
        neutral: {
          10: { value: 'hotpink' },
          20: { value: 'hotpink' },
          40: { value: 'hotpink' },
          60: { value: 'hotpink' },
          80: { value: 'hotpink' },
          100: { value: 'hotpink' },
        }
      }
    }
  }]
}

const buttonStyleOverride: StyleProp<ViewStyle> = { borderColor: 'purple' };
const textStyleOverride: StyleProp<TextStyle> = { color: 'purple' };

storiesOf('Button', module)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('with emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
  .add('disabled', () => <Button disabled>Disabled Button</Button>)
  .add('style override', () => (
    <ThemeProvider>
      <Button style={buttonStyleOverride} textStyle={textStyleOverride}>
        Themed button
      </Button>
    </ThemeProvider>
  ))
  .add('default theme', () => (
    <ThemeProvider>
      <Button>Themed button</Button>
    </ThemeProvider>
  ))
  .add('custom theme', () => (
    <ThemeProvider theme={customTheme}>
      <Button>Themed button</Button>
    </ThemeProvider>
  ))
  .add('default dark mode', () => {
    const colorScheme = useColorScheme();
    return (
      <ThemeProvider theme={withDarkMode} colorMode={colorScheme as ColorMode}>
        <Button>Themed button</Button>
      </ThemeProvider>
    )
  })
  .add('custom dark mode', () => {
    const colorScheme = useColorScheme();
    return (
      <ThemeProvider theme={customDarkMode} colorMode={colorScheme as ColorMode}>
        <Button>Themed button</Button>
      </ThemeProvider>
    )
  });
