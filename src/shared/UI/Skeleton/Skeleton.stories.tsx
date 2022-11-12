import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Skeleton, { ARTICLE_Size, CIRCLE_Size } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

/* -------------------- Article -------------------- */
/* --------------- SIZE-L --------------- */
export const Article_SIZE_M = Template.bind({});
Article_SIZE_M.args = {
  isArticle: true,
  size: ARTICLE_Size.ARTICLE_SIZE_M,
};

/* --------------- SIZE-L --------------- */
export const Article_SIZE_L = Template.bind({});
Article_SIZE_L.args = {
  isArticle: true,
  size: ARTICLE_Size.ARTICLE_SIZE_L,
};

export const Article_SIZE_Text = Template.bind({});
Article_SIZE_Text.args = {
  isArticle: true,
  size: ARTICLE_Size.ARTICLE_SIZE_text,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isArticle: true,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

/* --------------- SIZE-L --------------- */
export const CircleSizeL = Template.bind({});
CircleSizeL.args = {
  isCircle: true,
  size: CIRCLE_Size.CIRCLE_SIZE_L,
};

export const CircleSizeLDark = Template.bind({});
CircleSizeLDark.args = {
  isCircle: true,
  size: CIRCLE_Size.CIRCLE_SIZE_L,
};
CircleSizeLDark.decorators = [ThemeDecorator(Theme.DARK)];

/* --------------- SIZE-M --------------- */
export const CircleSizeM = Template.bind({});
CircleSizeM.args = {
  isCircle: true,
  size: CIRCLE_Size.CIRCLE_SIZE_M,
};

export const CircleSizeMDark = Template.bind({});
CircleSizeMDark.args = {
  isCircle: true,
  size: CIRCLE_Size.CIRCLE_SIZE_M,
};
CircleSizeMDark.decorators = [ThemeDecorator(Theme.DARK)];
