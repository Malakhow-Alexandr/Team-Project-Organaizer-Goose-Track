import { useTranslation } from "react-i18next";

const PasswordPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('Password Page')}</h2>
    </div>
  );
};

export default PasswordPage;
