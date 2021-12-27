# goit-react-hw-04-hooks-phonebook

# Критерии приема

-  При сдаче домашней работы есть ссылки: на исходные файлы и рабочую страницу проектов на
   `GitHub Pages`.
-  При запуске кода задания, в консоли нету ошибок и предупреждений.
-  Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей.
-  Для компонентов описаны `propTypes`.
-  Имена компонентов понятные, описательные.

## Книга контактов

-  Создан репозиторий `goit-react-hw-04-hooks-phonebook`.
-  Проведи рефакторинг кода задания [Книга контактов](../homework-03/phonebook/README.md) используя
   React-хуки.

# React App.

_Создает React приложение в текущей папке:_

```bash
npx create-react-app
```

_Создает React приложение в папке my-app:_

```bash
npx create-react-app my-app
```

# Настройка pre-commit хуков

## 1 - Установка зависимостей

Установить в проект следующие пакеты.

```bash
npm i -D prettier eslint
```

**В случае ошибки установить явно указать 7-ую версию: eslintv7.11.0 --->>**

```bash
npm i -D prettier eslint@7.11.0
```

```bash
npm i -S eslint-plugin-react-hooks
```

## 2 - Инициализация lint-staged и husky

Пользователям **MacOS** и **Linux** систем необходимо выполнить в терминале следующую команду. Она
установит и настроит `husky` и `lint-staged` в зависимости от инструментов качества кода из
зависимостей проекта в `package.json`.

```bash
npx mrm lint-staged
```

_Пользователям **Windows** необходимо выполнить следующую команду. Она делает тоже самое:_

```bash
npx mrm@2 lint-staged
```

## 3 - Установка дополнительных зависимостей (npm-пакетов):

### -ESLint

**eslint-config-react** Набор самоуверенных правил ESLint (http://eslint.org) (включая все правила),
адаптированных для проектов React.

```bash
npm i -S eslint-config-react babel-eslint eslint-plugin-react
```

**eslint-config-react-app** Этот пакет включает общую конфигурацию ESLint, используемую приложением
Create React.

```bash
npm i -S eslint-config-react-app
```

### -Prop-types

Проверка типа во время выполнения для свойств React и подобных объектов.

```bash
npm i -D prop-types
```

### -Nano ID

Крошечный, безопасный, удобный для URL генератор уникальных строковых идентификаторов для
JavaScript.

```bash
npm i -D nanoid
```

### -Sass

Чтобы использовать Sass, установите **node-sass**:

```bash
npm i -S node-sass@6.0.0
```

### -Postcss-loader

Инструмент для преобразования стилей с помощью плагинов JS и PostCSS-loader для webpack.

```bash
npm i -S postcss-loader postcss
```

### -Modern-normalize

Сброс стилей.

```bash
npm i -S modern-normalize
```

```js
import 'node_modules/modern-normalize/modern-normalize.css';
```

or

```html
<link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css" />
```

## 4 - Добавить npm скрипты в файл package.json:

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",
    "clean": "gh-pages-clean",
    "prepare": "husky install",
    "predeploy": "yarn build",
    ...
    "predeploy": "npm run build",
  },
```

## 5 - Интерграция плагинов

Ссылки на документацию по интеграции плагинов в популярные редакторы.

-  [Prettier editor integration](https://prettier.io/docs/en/editors.html)
-  [ESLint editor integration](https://eslint.org/docs/user-guide/integrations)

## 6 - Настройки VSCode

Для комфортной работы, после установки плагинов, нужно добавить несколько настроек редактора для
автосохранения и форматирования файлов.

```json
{
   "files.autoSave": "onFocusChange",
   "editor.formatOnSave": true,
   "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
   }
}
```

## 7 - Deployment на GitHub Pages

```bash
npm i -S gh-pages
```

**package.json**

```json
"homepage": "https://имя-профиля.github.io/имя-репозитория",
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
},
```

_"homepage": "https://DimaLitvinenko.github.io/goit-react-hw-02-phonebook",_

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel,
ESLint, etc) right into your project so you have full control over them. All of the commands except
`eject` will still work, but they will point to the copied scripts so you can tweak them. At this
point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle
deployments, and you shouldn’t feel obligated to use this feature. However we understand that this
tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
