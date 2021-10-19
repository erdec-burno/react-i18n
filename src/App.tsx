import React from 'react';
import { withTranslation, WithTranslation } from "react-i18next";
import logo from './logo.svg';
import './App.css';
import MyLocale from './components/MyLocale';

const App: React.FC<WithTranslation> = (props) => {
  const { t } = props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("title")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("description.subtitle1")}

          {t("description1.title")}
        </a>
        <MyLocale/>
      </header>
    </div>
  );
}

export default withTranslation()(App);
