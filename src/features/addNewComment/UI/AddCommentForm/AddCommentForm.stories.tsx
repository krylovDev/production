import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
  title: 'feature/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onSendComment: action('on send comment'),
};
Primary.decorators = [
  StoreDecorator({}),
];
