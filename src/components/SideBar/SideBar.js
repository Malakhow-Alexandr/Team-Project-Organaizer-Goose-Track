import { UserNav } from 'components/UserNav/UserNav';
import { SideBarContainer, LogoutBtn } from './SideBar.styled';

const SideBar = ({ toggleShowSideBar }) => {
  return (
    <SideBarContainer style={{ outline: '1px solid blue' }}>
      {/* User Panel */}
      <UserNav toggleShowSideBar={toggleShowSideBar} />

      {/* Button LogoutBtn */}
      <LogoutBtn>Logout</LogoutBtn>
    </SideBarContainer>
  );
};

export { SideBar };
