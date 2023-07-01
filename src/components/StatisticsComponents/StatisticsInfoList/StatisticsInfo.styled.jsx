import styled from 'styled-components';
import { theme } from 'theme';

export const InfoListContainer = styled.ul`
  display: flex;
  gap: 30px;
  margin-left: 16px;
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const InfoListItem = styled.li`
  position: relative;
  display: flex;
`;

export const InfoTextFirst = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.third_text_switch};
  @media screen and (min-width: ${theme.breakpoints.table}) {
  }
  &:before {
    content: '';
    position: absolute;
    margin-left: -15px;
    margin-top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${theme.colors.lightRed};
  }
`;

export const InfoTextSecond = styled(InfoTextFirst)`
  &:before {
    background-color: ${theme.colors.primary};
  }
`;
