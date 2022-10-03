import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Modal from 'shared/UI/Modal/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        autem consequuntur cupiditate, dolor dolore expedita illo porro possimus, praesentium
        quis rem tempora temporibus veritatis vero voluptas? Culpa dolorem facilis nesciunt?`,
};

export const Dark = Template.bind({});
Primary.args = {
  isOpen: true,
  children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        autem consequuntur cupiditate, dolor dolore expedita illo porro possimus, praesentium
        quis rem tempora temporibus veritatis vero voluptas? Culpa dolorem facilis nesciunt?`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
