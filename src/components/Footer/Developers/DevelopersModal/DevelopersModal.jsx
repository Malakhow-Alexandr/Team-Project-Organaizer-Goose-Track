import { DevelopersSlider } from '../DevelopersSlider/DevelopersSlider';
import { ModalDevelopers } from '../ModalDevelopers/ModalDevelopers';

export const DevelopersModal = ({ onClose }) => {
  return (
    <ModalDevelopers onClose={onClose}>
      <DevelopersSlider />
    </ModalDevelopers>
  );
};
