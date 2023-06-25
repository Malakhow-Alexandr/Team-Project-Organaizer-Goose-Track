import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';
import { useState } from 'react';

const Header = () => {



  // open FeedbackModal logic:
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <p>Header</p>
      <AddFeedbackBtn handleShowModal={handleShowModal} />
      {showModal && <AddFeedbackModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Header;
