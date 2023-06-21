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
      <button type="button" onClick={handleShowModal} aria-label="Add task">
        Add task
      </button>

      {showModal && (
        <Modal onClose={handleCloseModal} aria-label="Modal window is open" />
      )}
    </>
  );
};
