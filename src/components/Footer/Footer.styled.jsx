import styled from 'styled-components';
import { SiSwagger } from 'react-icons/si';
import { VscGithubInverted, VscGithub } from 'react-icons/vsc';
import { BiCopyright } from 'react-icons/bi';

import { theme } from 'theme';

export const FooterStyled = styled.footer`
  background-color: ${theme.colors.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 335px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 704px;
    max-width: 704px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 1184px;
    max-width: 1184px;
  }
`;

export const CopyIcon = styled(BiCopyright)``;

export const TeamInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LinksList = styled.ul`
  margin-left: auto;
  display: flex;
  gap: 15px;
`;
export const LinksListItem = styled.li``;

export const Links = styled.a`
  position: relative;
  display: block;
  padding-top: 30px;
  padding-bottom: 30px;
  transition: all 250ms ease;
  &:hover &:focus {
    transform: scale(1.2);
    color: ${theme.colors.white};
  }
`;

export const BackEndIcon = styled(VscGithub)`
  width: 30px;
  height: 30px;
  transition: all 250ms ease;
  
`;
export const LinkBack = styled(Links)`
  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
  &:before {
    content: 'Back';
    opacity: 0;
    position: absolute;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.inter};
    font-weight: 600;
    transition: opacity 250ms ease;
    top: 6px;
    left: -1px;
    
  }
  &:hover ${BackEndIcon} {
    fill: #fff;
    transform: scale(1.2);
  }
`;

export const FrontEndIcon = styled(VscGithubInverted)`
  width: 30px;
  height: 30px;
  transition: all 250ms ease;
 
`;

export const LinkFront = styled(Links)`
  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
  &::before {
    content: 'Front';
    opacity: 0;
    position: absolute;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.inter};
    font-weight: 600;
    transition: opacity 250ms ease;
    top: 6px;
    left: -1px;
  }

  &:hover ${FrontEndIcon} {
    fill: #fff;
    transform: scale(1.2);
  }
`;

export const SwaggerIcon = styled(SiSwagger)`
  width: 30px;
  height: 30px;
  transition: all 250ms ease;
 
`;

export const LinkSwagger = styled(Links)`
  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
  &::before {
    content: 'Swagger';
    opacity: 0;
    position: absolute;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.inter};
    font-weight: 600;
    transition: opacity 250ms ease;
    top: 6px;
    left: -22px;
  }
  &:hover ${SwaggerIcon}{
    fill: #fff;
    transform: scale(1.2);
  }
`;

export const ButtonTeam = styled.button`
  background-color: transparent;
  border: ${p => p.theme.borders.none};
  cursor: pointer;
`;

