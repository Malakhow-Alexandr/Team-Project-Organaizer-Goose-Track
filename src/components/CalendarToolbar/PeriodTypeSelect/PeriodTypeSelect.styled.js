import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-bottom: 14px;
`;

export const Item = styled.li`
  display: flex;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.lightBlue};

  &.active {
    background-color: ${p => p.theme.colors.darkBlue};
    color: ${p => p.theme.colors.side_bar_content_hover_switch};
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
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
