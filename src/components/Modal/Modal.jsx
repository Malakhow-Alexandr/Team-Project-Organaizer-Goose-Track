import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { CloseBtn, IconClose, ModalContainer, Overlay } from './Modal.styled';
import sprite from '../../icons/sprite.svg';

export const Modal = ({ children, onClose }) => {
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
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseBtn onClick={onClose}>
          {/* <IoMdClose />{' '} */}
          <IconClose width="24" height="24">
            <use href={sprite + '#icon-modal-close'} />
          </IconClose>
        </CloseBtn>

        {children}
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};
