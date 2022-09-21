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
