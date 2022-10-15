import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'feature/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123' },
})];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {};
PrimaryWithError.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: 'asd',
    error: 'Неправильный логин или пароль',
  },
})];

export const PrimaryWithLoading = Template.bind({});
PrimaryWithLoading.args = {};
PrimaryWithLoading.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: 'asd',
    isLoading: true,
  },
})];
