import { Theme } from 'app/providers/ThemeProvider';
import Main from 'pages/Main/UI/Main';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'pages/Main',
  component: Main,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
