import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../../images/sideBar/x-close-icon.svg';
import { ReactComponent as UserIcon } from '../../images/sideBar/user-icon.svg';
import { ReactComponent as CalendarIcon } from '../../images/sideBar/calendar-icon.svg';
import { ReactComponent as StatisticsIcon } from '../../images/sideBar/statistics-icon.svg';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    margin-bottom: 50px;
  }
`;

export const LinkLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  outline: 0;
  &:visited {
    color: ${props => props.theme.colors.side_bar_content_hover_switch};
  }
`;

export const GooseImg = styled.img`
  width: 36px;
  height: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 60px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 60px;
  }
`;

export const TextLogo = styled.p`
  font-family: ${props => props.theme.fonts.body};
  line-height: calc(22 / 16);

  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);
`;

export const TextLogoSpan = styled.span`
  font-style: italic;
`;

export const CloseBtnIcon = styled(CloseIcon)`
  width: 24px;
  height: 24px;

  margin-left: 39px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 33px;
    height: 33px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserIconStyled = styled(UserIcon)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 24px;
    height: 24px;
  }
`;

export const CalendarIconStyled = styled(CalendarIcon)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 24px;
    height: 24px;
  }
`;

export const StatisticsIconStyled = styled(StatisticsIcon)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 24px;
    height: 24px;
  }
`;

export const UserPanelText = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 24px;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: calc(17 / 14);
  color: ${props => props.theme.colors.user_text_switch};
  opacity: 0.5;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 0 0;
  gap: 18px;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  box-sizing: border-box;
  text-decoration: none;

  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-left: 12px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(19 / 16);

  color: ${props => props.theme.colors.third_text_switch};
  opacity: 0.5;

  &:hover {
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 8px;
    color: ${props => props.theme.colors.side_bar_content_hover_switch};
    background-color: ${props =>
      props.theme.colors.side_bar_hover_task_buttons_background_switch};
    padding-left: 14px;
    opacity: 1;
  }

  &.active {
    color: ${props => props.theme.colors.side_bar_content_hover_switch};
    opacity: 1;
  }

  font-size: 14px;
  line-height: 17px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    padding: 18.5px 0px 18.5px 25px;
    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;

export const StyledItem = styled.li`
  width: 100%;
  height: 40px;

  &.active {
    border-radius: 8px;
    background: ${props =>
      props.theme.colors.side_bar_hover_task_buttons_background_switch};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 225px;
    height: 56px;
  }
`;
