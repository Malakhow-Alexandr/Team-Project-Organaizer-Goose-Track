import styled from 'styled-components';

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 64px;
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 40px;
    padding-bottom: ${p => (p.showMotivationTitle ? '16px' : '32px')};
    align-items: ${p => (p.showMotivationTitle ? 'start' : 'center')};
  }
`;

export const HeaderTitle = styled.h3`
  display: none;

  font-family: ${props => props.theme.fonts.heading};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  margin: 0;

  color: ${props => props.theme.colors.primary_text_mode};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const MobileMenuButton = styled.button`
  color: ${props => props.theme.colors.primary_text_mode};
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;

  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const RightSectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
