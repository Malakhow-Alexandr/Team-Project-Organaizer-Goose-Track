import styled from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  max-width: 335px;
  height: 74px;
  padding: 18px 20px;
  background: var(--mainWhite);
  border: ${theme.borders.normal};
  border-color: ${theme.colors.calendar_border_color_switch};
  border-radius: ${theme.radii.small};
  margin-bottom: 14px;
  background-color: ${theme.colors.third_background_switch};

  @media screen and (min-width: 768px) {
    max-width: 704px;
    height: 68px;
    margin-bottom: 16px;
    padding: 14px 32px;
  }
  @media screen and (min-width: 1440px) {
    height: 68px;
    max-width: 1087px;
    padding: 14px 46px;
  }
  transition: all ease-in-out 250ms;
`;

export const WeekInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 0px 0px;
`;

export const DayOfWeek = styled.div`
  text-align: center;
  font-weight: ${theme.fontWeights.heading};
  font-size: ${theme.fontSizes.s};
  line-height: 18px;
  color: ${theme.colors.user_text_switch};
  margin: 0px 0px 4px 0px;
`;

export const DayNumber = styled.p`
  color: ${p => {
    if (p.isCurrentDay) {
      return 'white';
    } else {
      return theme.colors.third_text_switch;
    }
  }};
  transition: all ease-in-out 300ms;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 26px;
  color: ${theme.colors.text};
`;

export const DateContainer = styled.button`
  text-align: center;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.m};
  width: 27px;
  height: 26px;
  border-radius: ${theme.radii.small};
  background-color: ${p => {
    if (p.isCurrentDay) {
      return theme.colors.primary;
    } else {
      return 'transparent';
    }
  }};
  padding: 0;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 400ms;
  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
  &:hover > p {
    color: ${theme.colors.white};
  }
`;
