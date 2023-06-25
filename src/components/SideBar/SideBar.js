import { UserNav } from 'components/UserNav/UserNav';
import { SideBarContainer, LogoutBtn, LogoutBtnIcon } from './SideBar.styled';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';

const SideBar = ({ toggleShowSideBar }) => {
  const dispatch = useDispatch();

  const handelLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <SideBarContainer>
      <UserNav toggleShowSideBar={toggleShowSideBar} />

      <LogoutBtn type="button" onClick={handelLogOut}>
        Logout
        <LogoutBtnIcon />
      </LogoutBtn>
    </SideBarContainer>
  );
};

export { SideBar };
