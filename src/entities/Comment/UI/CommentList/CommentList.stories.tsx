import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import CommentList from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'test-user' },
    },
	  {
		  id: '2',
		  text: 'hello',
		  user: { id: '2', username: 'user' },
	  },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
