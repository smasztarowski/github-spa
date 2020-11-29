# github-spa

A single page application that displays a list of Github users by using the Github public API

## Installation

```bash
git clone git@github.com:smasztarowski/github-spa.git

cd github-spa

npm install

npm start
```

## Available NPM commands

### start

```bash
npm start
```

Starts local development server

### build

```bash
npm run build
```

Builds a production code

### generate-mock-data

```bash
npm run generate-mock-data
```

If you wish you can regenerate Sandbox data. Feel free to change parameters in the scripts/generateGithubData.js

### commit

```bash
npm run commit
```

Runs Commitizen CLI [Read more](https://github.com/commitizen/cz-cli)

## Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Material UI](https://material-ui.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://styled-components.com/)

## Additional Info

The local development server uses Sandbox API by default. You can change it to production API using Switch in the top left corner. State of chosen API is saved into SessionStorage
