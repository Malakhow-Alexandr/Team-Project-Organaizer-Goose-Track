import styled from 'styled-components';
import { theme } from 'theme';

export const TaskItem = styled.li`
  flex: 0 0 100%;
  padding-right: 7px;
  border-radius: ${theme.radii.small};
  border: ${theme.borders.normal};
  border-color: ${theme.colors.calendar_border_color_switch};
  background-color: ${theme.colors.third_background_switch};
  //add
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 20px;
  }

  max-height: 568px;
  @media screen and (min-width: 768px) {
    flex: 0 0 48.5%;
    &:not(:last-child) {
      margin-right: 16px;
    }
    //add
    /* display: flex;
    flex-direction: column; */
  }

  @media screen and (min-width: 1440px) {
    flex: 0 0 344px;
    &:not(:last-child) {
      margin-right: 27px;
    }
  }
  /* overflow: hidden; */
`;
