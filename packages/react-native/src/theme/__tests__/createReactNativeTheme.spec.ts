import { defaultDarkModeOverride } from '@aws-amplify/ui/dist/esm/theme/defaultDarkModeOverride';
import { createReactNativeTheme } from '../createReactNativeTheme';

describe('createReactNativeTheme', () => {
  describe('without a base theme', () => {
    const { tokens } = createReactNativeTheme({ name: 'test-theme' });
    console.log(tokens.components.button.color);

    it('should have tokens', () => {
      expect(tokens).toBeDefined();
    });
  });
  
  describe('without a base theme & dark mode', () => {
    const { tokens } = createReactNativeTheme({
      name: 'test-theme',
      overrides: [defaultDarkModeOverride]
    }, 'dark');
    console.log(tokens.components.button.color);

    it('should have tokens', () => {
      expect(tokens).toBeDefined();
    });
  });
  
  describe('with a custom theme', () => {
    const theme = createReactNativeTheme({
      name: 'test-theme',
      tokens: {
        components: {
          button: {
            color: { value: 'red' }
            // text: {
            //   color: 'red',
            // },
          },
        },
      },
    });

    it('should override the base theme', () => {
      const { tokens } = theme;
      expect(tokens.components.button.color.value).toEqual('red');
      expect(tokens.components.button.borderColor.value).toEqual('hsl(210, 6%, 70%)');
      expect(tokens.components.button.paddingBlockEnd.value).toEqual(8);
    });
  });
  
  describe('dark mode', () => {
    const theme = createReactNativeTheme({
      name: 'test-theme',
      tokens: {
        components: {
          button: {
            color: { value: 'red' }
          },
        },
      },
      overrides: [{
        colorMode: 'dark',
        tokens: {
          colors: {
            neutral: {
              60: { value: '#000' }
            }
          },
          components: {
            button: {
              color: { value: 'green' }
            },
          },
        }
      }]
    }, 'dark');
    
    it('should override the base theme', () => {
      const { tokens } = theme;
      expect(tokens.components.button.color.value).toEqual('green');
      expect(tokens.components.button.borderColor.value).toEqual('#000');
      expect(tokens.components.button.paddingBlockEnd.value).toEqual(8);
    });
  });
});
