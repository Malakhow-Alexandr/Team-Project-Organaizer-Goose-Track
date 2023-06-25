import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';
import { ThemeToggler } from '../../ThemeToggler/ThemeToggler';

import { RxHamburgerMenu } from 'react-icons/rx';

import { MobileMenuButton } from './Header.styled';

import { useState } from 'react';

const Header = ({ toggleShowSideBar }) => {
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
      <MobileMenuButton onClick={toggleShowSideBar}>
        <RxHamburgerMenu size={34} />
      </MobileMenuButton>

      <AddFeedbackBtn handleShowModal={handleShowModal} />

      <ThemeToggler />
      {showModal && <AddFeedbackModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Header;
