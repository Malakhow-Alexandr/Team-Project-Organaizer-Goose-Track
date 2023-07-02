import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

import { useTasks } from '../../../hooks/useTasks';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';
import { ThemeToggler } from '../../ThemeToggler/ThemeToggler';
import { DayPageTitle } from './DayPageTitle/DayPageTitle';
import { UserInfo } from './UserInfo/UserInfo';

import { RxHamburgerMenu } from 'react-icons/rx';

import {
  MobileMenuButton,
  HeaderSection,
  HeaderTitle,
  RightSectionHeader,
} from './Header.styled';

const getTypePage = pathname => {
  if (pathname.includes('/account')) {
    return 'account';
  } else if (pathname.includes('/month')) {
    return 'month';
  } else if (pathname.includes('/day')) {
    return 'day';
  } else if (pathname.includes('/statistics')) {
    return 'statistics';
  }
};

const Header = ({ toggleShowSideBar }) => {
  const { pathname } = useLocation();

  const { isNotDoneTask, getAllTasks } = useTasks();

  useEffect(() => {
    getAllTasks();
    console.log(isNotDoneTask);
  }, [getAllTasks]);

  const typePage = getTypePage(pathname);

  // open FeedbackModal logic:
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <HeaderSection>
      <MobileMenuButton onClick={toggleShowSideBar}>
        <RxHamburgerMenu size={34} color="var(--primary-text)" />
      </MobileMenuButton>

      <HeaderTitle>
        {typePage === 'account' && 'User Profile'}
        {typePage === 'month' && 'Calendar'}
        {typePage === 'statistics' && 'Statistics'}
      </HeaderTitle>

      {typePage === 'day' && isNotDoneTask ? (
        <DayPageTitle />
      ) : (
        <HeaderTitle>Calendar</HeaderTitle>
      )}

      <RightSectionHeader>
        <AddFeedbackBtn handleShowModal={handleShowModal} />
      </RightSectionHeader>
      <ThemeToggler />
      <UserInfo toggleShowSideBar={toggleShowSideBar} />

      {showModal && <AddFeedbackModal onClose={handleCloseModal} />}
    </HeaderSection>
  );
};

export default Header;
