import { UserNav } from 'components/UserNav/UserNav';
import { SideBarContainer, LogoutBtn, LogoutBtnIcon } from './SideBar.styled';

const SideBar = ({ toggleShowSideBar }) => {
  return (
    <SideBarContainer>
      <UserNav toggleShowSideBar={toggleShowSideBar} />

      <LogoutBtn>
        Logout
        <LogoutBtnIcon />
      </LogoutBtn>
    </SideBarContainer>
  );
};

export { SideBar };
