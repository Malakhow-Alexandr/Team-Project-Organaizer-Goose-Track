import styled from 'styled-components';
import { ReactComponent as LogoutIcon } from '../../images/sideBar/logout-icon.svg';

export const SideBarContainer = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 32px 24px 24px 24px;
    max-width: 289px;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  gap: 11px;
  align-items: center;
  justify-content: center;
  width: 131px;
  height: 46px;

  font-family: ${props => props.theme.fonts.heading};
  font-style: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.33;
  color: ${props => props.theme.colors.white};

  letter-spacing: -0.02em;

  background: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.big};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 768px) {
    width: 141px;
    height: 56px;
    font-size: 18px;
  }
`;

export const LogoutBtnIcon = styled(LogoutIcon)`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
