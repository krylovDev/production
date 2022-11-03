import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import React from 'react';
import avatar from 'shared/assets/tests/avatar.png';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    age: 32,
    city: 'Moscow',
    country: Country.RUSSIA,
    currency: Currency.RUB,
    firstName: 'Vladimir',
    lastName: 'Krylov',
    username: 'krylovDev',
    avatar: 'https://avatars.githubusercontent.com/u/77838663?v=4',
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const withLoading = Template.bind({});
withLoading.args = {
  isLoading: true,
};
