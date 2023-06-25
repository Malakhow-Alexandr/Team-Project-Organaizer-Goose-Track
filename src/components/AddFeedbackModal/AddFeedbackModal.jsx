import { Modal } from 'components/Modal/Modal';
import { FeedbackForm } from './FeedbackForm';

export const AddFeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
          <div>
              <FeedbackForm/>
      </div>
    </Modal>
  );
};
