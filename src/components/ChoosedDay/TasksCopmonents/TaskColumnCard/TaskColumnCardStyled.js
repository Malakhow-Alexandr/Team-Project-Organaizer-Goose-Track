import { theme } from 'theme';
import styled from 'styled-components';

export const TaskListItem = styled.li`
  border-radius: 8px;
  width: 100%;
  padding: 14px;
  border: 1px solid ${theme.colors.calendar_border_color_switch};
  margin-bottom: 18px;
  background-color: ${theme.colors.background_switch};
  @media screen and (min-width: 768px) {
    width: 301px;
  }

  transition: all ease-in-out 250ms;
`;

export const TextAvatar = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  border: 1.8px solid ${theme.colors.primary};
  margin-right: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  overflow: hidden;
  color: ${theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.text};
  font-weight: ${theme.fontWeights.heading};
`;

export const TaskStatue = styled.p`
  margin: 0;
  font-size: 10px;
  font-family: ${theme.fonts.heading};
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: ${theme.colors.muted};
  background-color: ${({ priority }) => {
    if (priority === 'low') {
      return '#72C2F8';
    }
    if (priority === 'medium') {
      return theme.colors.mainYellow;
    }
    if (priority === 'high') {
      return theme.colors.mainRed;
    }
  }};
  padding: 0 12px 0 12px;
  font-weight: ${theme.fontWeights.heading};
  line-height: 0.83;
  align-self: flex-end;
  margin-right: auto;
`;

export const TaskText = styled.p`
  color: ${theme.colors.primary_text_switch};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.normal};
  line-height: 1.28;
  margin-bottom: 32px;
  margin-top: 0;
  font-size: ${theme.fontSizes.s};
  max-width: 200px;
  @media screen and (min-width: 375px) {
    max-width: 256px;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const UserPhoto = styled.img`
  box-sizing: border-box;

  width: 32px;
  height: 32px;
  margin-right: 8px;

  border: 1.8px solid ${props => props.theme.colors.primary};
  border-radius: 50%;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 32px;
    height: 32px;
  }
`;
