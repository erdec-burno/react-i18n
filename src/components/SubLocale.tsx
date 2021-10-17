import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

const SubLocale: React.FC<WithTranslation> = props => {
    return (
        <div>
            {props.t("description.subtitle2")}
        </div>
    );
};

export default withTranslation()(SubLocale);