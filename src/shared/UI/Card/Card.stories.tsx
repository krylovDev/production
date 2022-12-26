import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Text from 'shared/UI/Text/Text';
import Card from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <Text
      title="title"
      text="text"
    />
  ),
};
