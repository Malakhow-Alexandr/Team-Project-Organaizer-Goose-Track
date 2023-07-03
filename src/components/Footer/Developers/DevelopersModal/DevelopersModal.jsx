import { Modal } from 'components/Modal/Modal';
import { DevelopersSlider } from '../DevelopersSlider/DevelopersSlider';

export const DevelopersModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <DevelopersSlider />
    </Modal>
  );
};
