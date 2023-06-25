import styled from 'styled-components';

export const MobileMenuButton = styled.button`
  color: ${props => props.theme.colors.primary_text_mode};
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;

  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;
