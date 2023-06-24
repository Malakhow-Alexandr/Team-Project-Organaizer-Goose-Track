import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { ButtonBox, ButtonTask } from './AddTaskBtn.styled';

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
      <ButtonBox>
        <ButtonTask onClick={handleShowModal} aria-label="Add task">
          <span>+</span>Add task
        </ButtonTask>
      </ButtonBox>

      {showModal && (
        <Modal onClose={handleCloseModal} aria-label="Modal window is open" />
      )}
    </>
  );
};
