import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-top: 18px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    margin-top: 0;
  }
`;
export const Item = styled.li`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  display: flex;
`;
export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.primary};

  background-color: ${p => p.theme.colors.lightBlue};

  &.active {
    background-color: ${p => p.theme.colors.darkBlue};
    color: ${p => p.theme.colors.primary};
  }
  &.month {
    padding: 8px 16px;
    border-radius: 8px 0 0 8px;
  }
  &.day {
    padding: 8px 25px;
    border-radius: 0 8px 8px 0;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    &.day {
      padding: 8px 26px;
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
