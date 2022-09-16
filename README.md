Файловая структура: [*Feature-Sliced Design*](https://feature-sliced.design/ru/)

1. app (Глобальные стили, обёртки, ErrorBoundary и т.п.)
2. processes (Процессы, Сложные многоуровневые сущности)
3. pages (Страницы)
4. widgets
5. features
6. entities (Бизнес-сущности)
7. shared (Переиспользуемые ресурсы)


**Этапы проектирования:**
#### Webpack
 - Подключен [*webpack*](https://webpack.js.org/). Настроен *[tsconfig.json](tsconfig.json)*
 - Декомпозиция *[webpack.config.ts](webpack.config.ts)*
 - Настроен [webpack-dev-server](https://webpack.js.org/configuration/dev-server/). Настроены переменные окружения для сборки
 - Добавлены пакеты react, react-dom, sass-loader. Настроен webpack для scss, css-modules. 
 - Добавлен react-router-dom. Добавлен Code splitting. Lazy,Suspense
 - Настроены глобальные стили + dark theme, настроены абсолютные импорты через webpack
