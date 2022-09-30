import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (story: () => Story) => (
  <BrowserRouter>
    {story()}
  </BrowserRouter>
);
