import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import { SideBar } from 'components/SideBar/SideBar';

import {
  Container,
  LeftColumnWrapper,
  Main,
  RightColumnWrapper,
} from './MainLayout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useEffect, useState } from 'react';
import { updateUser } from 'redux/auth/operations';

const MainLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    if (user.email) return;
    dispatch(updateUser);
  }, [user.email, dispatch]);

  const toggleShowSideBar = (status = null) => {
    if (status === null) {
      setShowSideBar(prev => !prev);
    } else {
      setShowSideBar(status);
    }
  };

  return (
    <Container>
      <Main>
        <LeftColumnWrapper showSideBar={showSideBar}>
          <SideBar toggleShowSideBar={toggleShowSideBar} />
        </LeftColumnWrapper>

        <RightColumnWrapper>
          {/* Потрібно написати header */}
          {/* <Header toggleShowSideBar={null} /> */}

          <Header toggleShowSideBar={toggleShowSideBar} />

          <h1>Calendar</h1>

          <Outlet />
        </RightColumnWrapper>
      </Main>
    </Container>
  );
};

export default MainLayout;
