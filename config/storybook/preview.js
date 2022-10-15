import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(RouteDecorator);
// addDecorator(StoreDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
