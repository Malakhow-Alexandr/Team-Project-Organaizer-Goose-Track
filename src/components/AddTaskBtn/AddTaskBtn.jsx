import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { ButtonBox, ButtonTask } from './AddTaskBtn.styled';
import { useTranslation } from 'react-i18next';

export const AddTaskBtn = () => {
  const { t } = useTranslation();
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
          <span>+</span>{t('Add task')}
        </ButtonTask>
      </ButtonBox>

      {showModal && (
        <Modal onClose={handleCloseModal} aria-label="Modal window is open" />
      )}
    </>
  );
};
