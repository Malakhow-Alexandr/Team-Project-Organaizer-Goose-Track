import styled from 'styled-components';
import { theme } from 'theme';

export const Wrap = styled.main`
  display: flex;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: ${props => props.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    max-width: ${props => props.theme.breakpoints.table};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 1151px;
  }
`;

export const Main = styled.div`
  position: relative;

  display: flex;
  height: 100vh;
`;

export const LeftColumnWrapper = styled.div`
  position: fixed;
  width: 225px;
  height: 100%;

  transition: all 250ms ease-in-out 0s;
  z-index: 100;
  position: absolute;
  left: ${props => (props.showSideBar ? '0' : '-200%')};

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 289px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    position: relative;
    left: 0;
  }
`;

export const LeftField = styled.div`
  position: absolute;
  right: 100%;
  top: 0;
  height: 100%;
  width: 100vw;
`;

export const RightColumnWrapper = styled.div`
  flex-grow: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  background-color: ${props => props.theme.colors.background_switch};

  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.bg_scroll_color};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.scroll_color};
  }

  ::-webkit-scrollbar-track-piece {
    background: transparent;
    border: none;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    padding-left: 30px;
    padding-right: 32px;
    padding-bottom: 32px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    overflow: auto;
  }
`;
