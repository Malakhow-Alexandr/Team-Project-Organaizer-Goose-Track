import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
export const Item = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
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

  @media screen and (min-width: 768px) {
    &.day {
      padding: 8px 26px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
