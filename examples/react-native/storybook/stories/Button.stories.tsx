import React from 'react';
import { StyleProp, Text, TextStyle, useColorScheme, ViewStyle } from 'react-native';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Button } from '@aws-amplify/ui-react-native/dist/primitives';
import { ThemeProvider } from '@aws-amplify/ui-react-native/dist/ThemeProvider';
import { Theme, defaultTheme, ColorMode, defaultDarkModeOverride } from '@aws-amplify/ui-react-native/dist/theme';

const customTheme: Theme = {
  name: 'my-theme',
  tokens: {
    components: {
      button: {
        borderColor: {value: '{colors.brand.secondary.80}'},
        color: {
          value: 'green',
        },
      },
    },
  },
};

const brandedTheme: Theme = {
  name: 'branded-theme',
  tokens: {
    colors: {
      brand: {
        primary: defaultTheme.tokens.colors.pink,
      }
    },
    components: {
      button: {
        borderColor: {value: '{colors.brand.primary.80}'},
      }
    }
  },
  overrides: [defaultDarkModeOverride]
  // overrides: [{
  //   colorMode: 'dark',
  //   tokens: {
  //     colors: {
  //       brand: {
  //         primary: defaultTheme.tokens.colors.blue,
  //       }
  //     },
  //   }
  // }]
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
  .add('branded theme', () => {
    const colorMode = useColorScheme();
    return (
    <ThemeProvider theme={brandedTheme} colorMode={colorMode as ColorMode}>
      <Button>Themed button</Button>
    </ThemeProvider>
  )})
  .add('primary', () => {
    const colorMode = useColorScheme();
    return (
      <ThemeProvider theme={brandedTheme} colorMode={colorMode as ColorMode}>
        <Button variation='primary'>Themed button</Button>
      </ThemeProvider>
    )
  });
