import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const AddTaskBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>

      {showModal && (
        <Modal onClose={handleCloseModal} aria-label="Modal window is open" />
      )}
    </>
  );
};
