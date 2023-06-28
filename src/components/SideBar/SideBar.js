import { UserNav } from 'components/UserNav/UserNav';
import { SideBarContainer, LogoutBtn, LogoutBtnIcon } from './SideBar.styled';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const SideBar = ({ toggleShowSideBar }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handelLogOut = () => {
    dispatch(logoutUser());
  };

  /*
Hook для приховування компонента SideBar
при кліку мишки за межами SideBar
 */
  const sideBarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        toggleShowSideBar(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleShowSideBar]);

  return (
    <SideBarContainer ref={sideBarRef}>
      <UserNav toggleShowSideBar={toggleShowSideBar} />

      <LogoutBtn type="button" onClick={handelLogOut}>
        {t('Logout')}
        <LogoutBtnIcon />
      </LogoutBtn>
    </SideBarContainer>
  );
};

export { SideBar };
