import { useTranslation } from "react-i18next";

const PasswordRecoveryPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('Password Recovery Page')}</h2>
    </div>
  );
};

export default PasswordRecoveryPage;
