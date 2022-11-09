import { DesignTokenProperties } from '../types/designToken';

type TabItemStateTokens<OutputType> = DesignTokenProperties<
  'backgroundColor' | 'borderColor' | 'color',
  OutputType
>;

type TabItemTokens<OutputType = unknown> = DesignTokenProperties<
  | 'backgroundColor'
  | 'borderColor'
  | 'borderStyle'
  | 'borderWidth'
  | 'color'
  | 'fontSize'
  | 'fontWeight'
  | 'paddingVertical'
  | 'paddingHorizontal'
  | 'textAlign'
  | 'transitionDuration'
> & {
  _hover?: DesignTokenProperties<'color', OutputType>;
  _focus?: DesignTokenProperties<'color', OutputType>;
  _active?: TabItemStateTokens<OutputType>;
  _disabled?: TabItemStateTokens<OutputType>;
};

export type TabsTokens<OuptutType = unknown> = DesignTokenProperties<
  'backgroundColor' | 'borderColor' | 'borderStyle' | 'borderWidth' | 'gap'
> & {
  item?: TabItemTokens<OuptutType>;
};

export const tabs: TabsTokens = {
  backgroundColor: { value: 'transparent' },
  borderColor: { value: '{colors.border.secondary.value}' },
  borderStyle: { value: 'solid' },
  borderWidth: { value: '{borderWidths.medium.value}' },
  gap: { value: '0' },

  item: {
    backgroundColor: { value: 'transparent' },
    borderColor: { value: '{colors.border.secondary.value}' },
    borderStyle: { value: 'solid' },
    borderWidth: { value: '{borderWidths.medium.value}' },
    color: { value: '{colors.font.secondary.value}' },
    fontSize: { value: '{fontSizes.medium.value}' },
    fontWeight: { value: '{fontWeights.bold.value}' },
    paddingVertical: { value: '{space.small.value}' },
    paddingHorizontal: { value: '{space.medium.value}' },
    textAlign: { value: 'center' },
    transitionDuration: { value: '{time.medium.value}' },

    _hover: {
      color: { value: '{colors.font.hover.value}' },
    },
    _focus: {
      color: { value: '{colors.font.focus.value}' },
    },
    _active: {
      color: { value: '{colors.font.interactive.value}' },
      borderColor: { value: '{colors.font.interactive.value}' },
      backgroundColor: { value: 'transparent' },
    },
    _disabled: {
      color: { value: '{colors.font.disabled.value}' },
      backgroundColor: { value: 'transparent' },
      borderColor: { value: '{colors.border.tertiary.value}' },
    },
  },
};
