import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

const RenderWithTranslation = (component: ReactNode) => render(
  <I18nextProvider i18n={i18nForTests}>
    {component}
  </I18nextProvider>,
);

export default RenderWithTranslation;
