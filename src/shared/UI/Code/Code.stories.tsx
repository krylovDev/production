import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Code from './Code';

export default {
  title: 'pages/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'export default {\n'
    + "  title: 'pages/Code',\n"
    + '  component: Code,\n'
    + '  argTypes: {\n'
    + "    backgroundColor: { control: 'color' },\n"
    + '  },\n'
    + '} as ComponentMeta<typeof Code>;',
};
