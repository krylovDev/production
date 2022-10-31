import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Avatar from './Avatar';
import AvatarImg from './avatar.png';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

// Темы
export const NormalLight = Template.bind({});
NormalLight.args = {
  size: 150,
  src: AvatarImg,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  size: 150,
  src: AvatarImg,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SmallLight = Template.bind({});
SmallLight.args = {
  size: 50,
  src: AvatarImg,
};

export const SmallDark = Template.bind({});
SmallDark.args = {
  size: 50,
  src: AvatarImg,
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];
