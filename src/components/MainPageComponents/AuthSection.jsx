import React from 'react';

import { useViewportHeight } from 'hooks/useViewportHeight';

import {
  Header,
  ContentWrapper,
  ImageWrapper,
  LoginLink,
  RegisterLink,
} from './AuthSection.styled';

import goose1 from 'images/mainPage/desktop_goose_mainPage.png';
import goose2 from 'images/mainPage/desktop_goose_mainPage@2x.png';

import sprite from 'icons/sprite.svg';

export const AuthSection = () => {
  const viewportHeight = useViewportHeight();

  return (
    <Header height={viewportHeight}>
      <ContentWrapper height={viewportHeight}>
        <ImageWrapper>
          <img
            srcSet={`${goose1} 1x, ${goose2} 2x`}
            src={goose1}
            alt="Goose welcome you"
            title="Goose welcome you"
          />
        </ImageWrapper>

        <h1>
          G<span>oo</span>seTrack
        </h1>
        <nav>
          <LoginLink to="login">
            Log in
            <svg height="13.5" width="13.5">
              <use href={sprite + '#icon-enter'}></use>
            </svg>
          </LoginLink>
          <RegisterLink to="register">Sign up</RegisterLink>
        </nav>
      </ContentWrapper>
    </Header>
  );
};
