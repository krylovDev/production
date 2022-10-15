import 'app/styles/index.scss';
import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
);
