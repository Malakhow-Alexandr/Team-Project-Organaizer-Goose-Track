import styled from 'styled-components';

export const ThemeModeBtn = styled.button`
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1px;
  margin-left: 8px;

  cursor: pointer;
`;
