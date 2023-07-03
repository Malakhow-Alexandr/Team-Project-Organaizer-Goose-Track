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
import LanguageFlagsBtn from 'components/localization/LanguageFlagsBtn';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  useEffect(() => {
    getAllTasks();
    console.log(isNotDoneTask);
  }, [getAllTasks, isNotDoneTask]);

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

      {typePage === 'day' && isNotDoneTask ? (
        <DayPageTitle />
      ) : (
        <HeaderTitle>
          {typePage === 'account' && t('User Profile')}
          {typePage === 'month' && t('Calendar')}
          {typePage === 'day' && t('Calendar')}
          {typePage === 'statistics' && t('Statistics')}
        </HeaderTitle>
      )}

      <RightSectionHeader>
        <AddFeedbackBtn handleShowModal={handleShowModal} />
      </RightSectionHeader>
      <LanguageFlagsBtn />
      <ThemeToggler />

      <UserInfo toggleShowSideBar={toggleShowSideBar} />

      {showModal && <AddFeedbackModal onClose={handleCloseModal} />}
    </HeaderSection>
  );
};

export default Header;
