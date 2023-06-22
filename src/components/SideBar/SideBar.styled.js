import styled from 'styled-components';

export const SideBarContainer = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 32px 24px 24px 24px;
    max-width: 289px;
  }
`;

export const LogoutBtn = styled.button`
  background-color: ${props => props.theme.colors.primary};
  display: block;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;
