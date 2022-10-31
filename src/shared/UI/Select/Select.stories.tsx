import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Select from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

// Темы
export const Normal = Template.bind({});
Normal.args = {
  label: 'Укажите значение!',
  options: [
    { value: '1', content: 'one' },
    { value: '2', content: 'two' },
    { value: '3', content: 'three' },
  ],
};
