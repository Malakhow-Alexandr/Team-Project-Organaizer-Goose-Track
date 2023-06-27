import { AddFeedbackButton } from './AddFeedbackBtn.styled';

const AddFeedbackBtn = ({ handleShowModal }) => (
  <AddFeedbackButton onClick={handleShowModal}>Feedback</AddFeedbackButton>
);

export default AddFeedbackBtn;
