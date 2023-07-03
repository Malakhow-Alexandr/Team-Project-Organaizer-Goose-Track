import { AddFeedbackButton } from './AddFeedbackBtn.styled';
import { useTranslation } from 'react-i18next';
import {
  FeedbackIcon,
  FeedbackTextSpan,
} from '../AddFeedbackBtn/AddFeedbackBtn.styled';

const AddFeedbackBtn = ({ handleShowModal }) => {
  const { t } = useTranslation();
  return (
    <AddFeedbackButton onClick={handleShowModal}>
      <FeedbackTextSpan> {t('Feedback')}</FeedbackTextSpan>
      <FeedbackIcon />
    </AddFeedbackButton>
  );
};

export default AddFeedbackBtn;
