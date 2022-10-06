import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface ComponentsWithRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

const componentsWithRender = (component: ReactNode, options: ComponentsWithRenderOptions = {}) => {
  const {
    route = RoutePath[AppRoutes.MAIN],
    initialState,
  } = options;
  render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};

export default componentsWithRender;
