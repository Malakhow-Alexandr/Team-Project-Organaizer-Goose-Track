import { AddFeedbackButton } from './AddFeedbackBtn.styled';
import { useTranslation } from 'react-i18next';

const AddFeedbackBtn = ({ handleShowModal }) => {
  const { t } = useTranslation();
  return (
    <AddFeedbackButton onClick={handleShowModal}>{t('Feedback')}</AddFeedbackButton>
  );
};

export default AddFeedbackBtn;
