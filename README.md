### Файловая структура: [*Feature-Sliced Design*](https://feature-sliced.design/ru/)

1. **Shared** — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса.
2. **Entities** (сущности) — бизнес-сущности (например, User, Product или Order).
3. **Features** (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя.
4. **Widgets** (виджеты) — композиционный слой для соединения сущностей и фич в самостоятельные блоки.
5. **Pages** (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
6. **Processes** — сложные сценарии, покрывающие несколько страниц (например, аутентификация).
7. **App** — настройки, стили и провайдеры для всего приложения.


### Этапы разработки:
#### Webpack
 - Подключен [*webpack*](https://webpack.js.org/). Настроен *[tsconfig.json](tsconfig.json)*
 - Декомпозиция *[webpack.config.ts](webpack.config.ts)*
 - Настроен [webpack-dev-server](https://webpack.js.org/configuration/dev-server/). Настроены переменные окружения для сборки
 - Добавлены пакеты [react](https://ru.reactjs.org), [react-dom](https://ru.reactjs.org/docs/react-dom.html). Настроен webpack для [scss](https://sass-scss.ru), [css-modules](https://github.com/css-modules/css-modules). 
 - Добавлен [react-router-dom 6](https://reactrouter.com/en/v6.3.0/getting-started/overview). Добавлен [Code-splitting](https://reactjs.org/docs/code-splitting.html). [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy), [React.Suspense](https://reactjs.org/docs/react-api.html#reactsuspense)
 - Настроены глобальные стили + dark theme, настроены абсолютные импорты через webpack

#### Routes, Styles, linting, Jest
 - Настроен конфиг для router
 - Добавлен webpack [SVGr](https://www.npmjs.com/package/@svgr/webpack) для svg, [file-loader](https://v4.webpack.js.org/loaders/file-loader/) для jpeg,gif,png и т.п.
 - Добавлен [Sidebar](src/widget/Sidebar/UI/Sidebar/Sidebar.tsx), [Navbar](src/widget/Navbar/UI/Navbar.tsx), [ThemeSwitcher](src/shared/UI/ThemeSwitcher/ThemeSwitcher.tsx)
 - Добавлен [i18n](https://react.i18next.com/). [Define plugin](https://webpack.js.org/plugins/define-plugin/). Добавлен [LangSwitcher](src/shared/UI/LangSwitcher/LangSwitcher.tsx)
 - Добавлен [react-refresh-webpack-plugin](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin) для отображения изменений в Реакт компонентах без перезагрузки страницы и [hot-module-replacement-plugin](https://webpack.js.org/plugins/hot-module-replacement-plugin/) для стилей и т.п.
 - Настроен [ESLint](https://eslint.org/). Создан [.eslintrc.js](.eslintrc.js)
 - Настроен [Stylelint](https://stylelint.io/). Создан [.stylelintrc.json](.stylelintrc.json)
 - Настроен [Jest](https://jestjs.io/ru/). Создан [jest.config.ts](./config/jest/jest.config.ts)
 - Добавлен страница [NotFoundPage](src/pages/NotFoundPage/UI/NotFoundPage.tsx) и Loader (Spinner)

#### Storybook, RTL, Bundle analyzer, Error Boundary, UI tests
- Добавлен [ErrorBoundary](src/app/providers/ErrorBoundary/UI/ErrorBoundary.tsx), компонент ошибки [PageError](src/widget/PageError/UI/PageError.tsx)
- Установлен [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) для отслеживания размера бандла
- Установлен [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/). Написаны тесты на [Button](./src/shared/UI/Button/Button.test.tsx),[Sidebar](./src/widget/Sidebar/UI/Sidebar/Sidebar.test.tsx)
- Установлен [Storybook](https://storybook.js.org/docs/react/get-started/introduction). Написана stories на каждую страницу и компонент
- Установлен [Loki](https://loki.js.org/getting-started.html) для скриншотного тестирования в связке со Storybook
- Настроен [Github Actions pipeline](.github/workflows/main.yaml). Автоматические тесты при pull-request или push в master. Добавлены скриншотные тесты.
- Добавлены размеры M, L, XL для Button. Обновлён Storybook. Ссылки перенесены в Sidebar. Добавлены иконки для ссылок.
- Установлен [reg-cli](https://github.com/reg-viz/reg-cli) для более удобного сравнения скриншотов для тестирования

#### Database, Redux
- Добавлен [Redux Toolkit](https://redux-toolkit.js.org/).
- Установлен [json-server](https://www.npmjs.com/package/json-server) для имитации работы cервера.

#### Авторизация. Husky. Input. Работа с текстом. Lazy modal. Reducers, slices, async thunk
- Добавлен [Lazy Modal](src/shared/UI/Modal/Modal.tsx), [Кастомный Input](src/shared/UI/Input)
- Добавлен husky pre-push. В конфиг [husky](.husky/pre-commit) добавлена проверка линтеров.
- Добавлена [форма авторизации](src/features/AuthByUsername/UI/LoginForm/LoginForm.tsx). [UserSlice](src/entities/User/model/slice/userSlice.ts). Авторизация через redux-toolkit.

#### Async reducers. Тесты. Instance API. TS strict mode. Модуль профиля
- Добавлен [Reducer Manager](src/app/providers/StoreProvider/config/reducerManager.ts) и [DynamicModuleLoader](src/shared/lib/components/DynamicModuleLoader.tsx), чтобы в runtime добавлять и удалять новые редьюсеры
- Создан класс [TestAsyncThunk](src/shared/lib/tests/TestAsyncThunk/TestAsyncThunk.ts) для тестирования
- Добавлен [Instance API](src/shared/api/api.ts) для запросов
