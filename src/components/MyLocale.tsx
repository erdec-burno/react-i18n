import React from 'react';
import { useTranslation } from "react-i18next";
import i18n from '../i18n';

const MyLocale: React.FC = (props) => {
  const { t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const name = "MyLocale!";
  return (
    <div className="App">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <hr />
        <p>====== {t("description.subtitle3", {name})} ======</p>
        <p>result from api backend: {t("back:description.subtitle1")}</p>
    </div>
  );
}

export default MyLocale;