import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  CloseBtn,
  ModalContainer,
  Overlay,
  MyCloseIcon,
} from './ModalDevelopers.styled';

export const ModalDevelopers = ({ children, onClose }) => {
  const handleKeyPress = useCallback(
    evt => {
      if (evt.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleOverlayClick = useCallback(
    evt => {
      if (evt.target === evt.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const body = document.body;
    body.classList.add('no-scroll'); // Add class to disable scrolling

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      body.classList.remove('no-scroll'); // Remove class to re-enable scrolling
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseBtn onClick={onClose}>
          <MyCloseIcon width="24" height="24"></MyCloseIcon>
        </CloseBtn>
        {children}
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};
