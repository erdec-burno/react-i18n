import React from 'react';
import { withTranslation, WithTranslation } from "react-i18next";
import SubLocale from './SubLocale';

const MyLocale: React.FC<WithTranslation> = (props) => {
  const { t/*, i18n*/ } = props;

  /*const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };*/
  return (
    <div className="App">
        {/*<button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>*/}
        <hr />
        <p>====== {t("description.subtitle3")} ======</p>
        <SubLocale/>
    </div>
  );
}

export default withTranslation()(MyLocale);
