import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-left: 0;
  padding-right: 0;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: ${props => props.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    max-width: ${props => props.theme.breakpoints.table};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: ${props => props.theme.breakpoints.desktop};
  }
`;

export const Main = styled.main`
  position: relative;

  display: flex;
`;

export const LeftColumnWrapper = styled.div`
  width: 225px;
  height: 100vh;

  transition: all 250ms ease-in-out 0s;
  z-index: 100;
  position: absolute;
  left: ${p => (p.showSideBar ? '0' : '-200%')};

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
  background-color: ${props => props.theme.colors.third_background_mode};
`;

export const RightColumnWrapper = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  background-color: ${props => props.theme.colors.muted};

  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: black;
  }

  ::-webkit-scrollbar-track-piece {
    background: transparent;
    border: none;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    padding: 0 32px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 32px;
    overflow: hidden;
  }
`;
