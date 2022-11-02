import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from 'pages/Profile/UI/ProfilePage';
import React from 'react';
import avatar from 'shared/assets/tests/avatar.png';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  profile: {
    form: {
      age: 32,
      city: 'Moscow',
      country: Country.RUSSIA,
      currency: Currency.RUB,
      firstName: 'Vladimir',
      lastName: 'Krylov',
      username: 'krylovDev',
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        age: 32,
        city: 'Moscow',
        country: Country.RUSSIA,
        currency: Currency.RUB,
        firstName: 'Vladimir',
        lastName: 'Krylov',
        username: 'krylovDev',
      },
    },
  }),
];
