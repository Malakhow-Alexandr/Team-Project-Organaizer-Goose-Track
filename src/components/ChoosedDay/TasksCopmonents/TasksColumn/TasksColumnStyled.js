import styled from 'styled-components';
import { theme } from 'theme';

export const TaskItem = styled.li`
  flex: 0 0 100%;
  margin-bottom: 20px;
  padding-right: 7px;
  border-radius: ${theme.radii.small};
  border: ${theme.borders.normal};
  border-color: ${theme.colors.calendar_border_color_switch};
  background-color: ${theme.colors.third_background_switch};
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 20px;
  }

  max-height: 60vh;
  @media screen and (min-width: ${theme.breakpoints.table}) {
    flex: 0 0 48.8%;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex: 0 0 344px;
    &:not(:last-child) {
      margin-right: 27px;
    }
  }
  transition: all ease-in-out 250ms;
`;
