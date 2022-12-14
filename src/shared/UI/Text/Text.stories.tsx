import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Text, { TextSize, TextTheme } from 'shared/UI/Text/Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet.',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title',
};

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Lorem ipsum dolor sit amet.',
};

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Lorem ipsum dolor sit amet.',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const withError = Template.bind({});
withError.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet.',
  theme: TextTheme.ERROR,
};

export const withErrorDark = Template.bind({});
withErrorDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet.',
  theme: TextTheme.ERROR,
};
withErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

/* ____________________SIZE__________________ */
export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet.',
  size: TextSize.M,
};

export const SizeMDark = Template.bind({});
SizeMDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet.',
  size: TextSize.M,
};
SizeMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet.',
  size: TextSize.L,
};

export const SizeLDark = Template.bind({});
SizeLDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet.',
  size: TextSize.L,
};
SizeLDark.decorators = [ThemeDecorator(Theme.DARK)];
