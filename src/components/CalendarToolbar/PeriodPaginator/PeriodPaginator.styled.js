import styled from 'styled-components';
import { theme } from 'theme';
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 14px;
  border: none;

  @media screen and (min-width: ${theme.breakpoints.table}) {
    align-items: center;
  }
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`;
export const PeriodPaginatorButton = styled.p`
  display: flex;
  width: 140px;
  height: 30px;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 6px 1px;
  margin-right: 8px;
  border: none;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.body};
  &:hover {
    background-color: rgb(43, 120, 239);
  }
  &:active {
    filter: blur(0.1rem);
  }
  transition: all ease-in-out 250ms;

  @media screen and (min-width: ${theme.breakpoints.table}) {
    display: flex;
    gap: 8px;
    width: 170px;
    height: 34px;
    padding: 8px 1px;
    margin-right: 8px;
    margin-bottom: 0;
    font-size: ${theme.fontSizes.m};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  border: none;
`;

export const Button1 = styled.button`
  height: 30px;
  width: 38px;
  background-color: ${theme.colors.third_background_switch};
  font-size: ${theme.fontSizes.l};
  color: ${theme.colors.second_text_switch};
  border: ${theme.borders.normal};
  border-color: ${theme.colors.calendar_border_color_switch};
  border-radius: ${theme.radii.small};
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.background_switch};
    color: ${theme.colors.third_text_switch};
  }

  @media screen and (min-width: ${theme.breakpoints.table}) {
    height: 34px;
  }
  transition: all ease-in-out 250ms;
`;

export const Button2 = styled.button`
  height: 30px;
  width: 38px;
  background-color: ${theme.colors.third_background_switch};
  font-size: ${theme.fontSizes.l};
  color: ${theme.colors.second_text_switch};
  border: ${theme.borders.normal};
  border-color: ${theme.colors.calendar_border_color_switch};
  border-radius: ${theme.radii.small};
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.background_switch};
    color: ${theme.colors.primary_text_switch};
  }

  @media screen and (min-width: ${theme.breakpoints.table}) {
    height: 34px;
  }
  transition: all ease-in-out 250ms;
`;
