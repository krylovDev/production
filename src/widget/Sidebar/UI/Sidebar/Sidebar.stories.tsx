import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Sidebar from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const isAuthUserLight = Template.bind({});
isAuthUserLight.args = {};
isAuthUserLight.decorators = [StoreDecorator({
  user: { authData: {} },
})];

export const isAuthUserDark = Template.bind({});
isAuthUserDark.args = {};
isAuthUserDark.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
  ThemeDecorator(Theme.DARK)];

export const NoAuthUserLight = Template.bind({});
NoAuthUserLight.args = {};
NoAuthUserLight.decorators = [StoreDecorator({
  user: {},
})];

export const NoAuthUserDark = Template.bind({});
NoAuthUserDark.args = {};
NoAuthUserDark.decorators = [
  StoreDecorator({
    user: {},
  }),
  ThemeDecorator(Theme.DARK),
];
