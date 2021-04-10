import { themes } from '@storybook/theming';
import ThemeProvider from '../src/lib/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}

export const decorators = [
  Story => (
    <>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </>
  )
]
