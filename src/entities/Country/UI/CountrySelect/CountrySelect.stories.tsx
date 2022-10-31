import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect, ',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CountrySelect >;

const Template: ComponentStory<typeof CountrySelect > = (args) => <CountrySelect {...args} />;

// Темы
export const Normal = Template.bind({});
Normal.args = {
};
