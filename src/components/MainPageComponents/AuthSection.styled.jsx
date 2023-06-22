import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Header = styled.header`
  height: ${p => p.height}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.primary};
`;

export const ContentWrapper = styled.div`
  nav {
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ height }) =>
      css`
        row-gap: calc(${height}px * 0.25);
      `}

    @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
      margin-top: 40px;

      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      column-gap: 24px;
    }

    @media screen and (max-height: 425px) {
      margin-top: 32px;

      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      column-gap: 24px;
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;

    font-family: 'Coolvetica';
    font-weight: 400;
    font-size: 44px;
    line-height: 1.09;
    text-align: center;

    color: ${p => p.theme.colors.white};

    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

    @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
      font-size: ${p => p.theme.fontSizes.xxl};
      line-height: ${p => p.theme.lineHeights.body};
    }

    @media screen and (max-height: 425px) {
      font-size: 100px;
    }

    @media screen and (max-width: ${p => p.theme.breakpoints.mobileMax}) {
      font-size: 44px;
    }

    @media screen and (max-height: 375px) {
      font-size: 44px;
    }

    span {
      font-style: italic;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 142px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 150px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const LoginLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8.25px;

  width: 131px;
  padding-top: 14px;
  padding-bottom: 14px;

  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;
  text-decoration: none;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.background};

  border-radius: ${p => p.theme.radii.big};
  box-shadow: ${p => p.theme.shadows.boxShadow};

  opacity: 1;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  & svg {
    stroke: ${p => p.theme.colors.primary};
  }
`;

export const RegisterLink = styled(Link)`
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.16;
  text-decoration: underline;

  color: ${p => p.theme.colors.white};
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const ScrollDownWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;

  height: 40px;
  width: 40px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    bottom: 20px;
    right: 10px;

    height: 70px;
    width: 70px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
