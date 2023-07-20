# React App mono repo Boilerplate

A simple boilerplate for creating web app´s using Vite, React Js, Javascript, Redux Toolkit and TailwindCss in the Front and Flask, SqlAlchemy, Python and Planet Scale in the Back.

## Authors

- [@lbdelilla](https://www.github.com/lbdelilla)

## Documentation

- [Vite](https://vitejs.dev/guide/)

- [React Js](https://es.react.dev/)

- [Redux toolkit](https://redux.js.org/redux-toolkit/overview/#:~:text=What%20is%20Redux%20Toolkit%3F%20Redux%20Toolkit%20is%20our,common%20Redux%20use%20cases%2C%20including%20store%20setup%2C%20)

- [React-Router](https://reactrouter.com/en/main)

- [TailwindCss](https://tailwindcss.com/)

- [Flask & SqlAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/)

- [Python](https://www.python.org/doc/)

- [Planet Scale](https://app.planetscale.com/)

## Installation

Install _FRONTEND_ with npm

```bash
  cd front
  npm install
  npm run dev
```

Copy .ENV (Do it in both Front and in Back folders)

```bash
cp .env.example .env
```

Install _BACKEND_ with npm

```bash
  cd back
  pipenv install
  pipenv shell
  pipenv run start
```

Create migrations folder

```bash
 pipenv run init
```

## Changes in Models

```bash
  pipenv run migrate
  pipenv run upgrade
```
