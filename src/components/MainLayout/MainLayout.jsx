import { SideBar } from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

import {
  Container,
  LeftColumnWrapper,
  Main,
  RightColumnWrapper,
} from './MainLayout.styled';

const MainLayout = () => {
  return (
    <Container>
      <Main>
        <LeftColumnWrapper>
          <SideBar toggleShowSideBar={false} />
        </LeftColumnWrapper>

        <RightColumnWrapper>
          {/* Потрібно написати header */}
          {/* <Header toggleShowSideBar={null} /> */}
          <h1>Calendar</h1>

          <Outlet />
        </RightColumnWrapper>
      </Main>
    </Container>
  );
};

export default MainLayout;
