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
  align-items: center;
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

export const CopyIcon = styled(BiCopyright)`
  margin-right: 3px;
  color: ${theme.colors.white};
`;

export const TeamInfoWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;
export const YearInfo = styled.p`
  font-family: ${theme.fonts.inter};
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 600;
`;

export const CreatedBy = styled.p`
  font-family: ${theme.fonts.inter};
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  @media screen and (max-width: 1439px){
    display: none
  }
`;
export const TeamButton = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  color: ${theme.colors.white};
  padding: 0;
  line-height: 42px;
  font-family: ${theme.fonts.inter};
  font-size: 16px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: ${theme.transition.hover};
  position: relative;
  display: inline-block;
  outline: none;

  @media screen and (min-width:1440px){
    font-size: 18px;
  font-weight: 600;
    
  }
  &:hover {
    color: ${theme.colors.white};
    background: transparent;
    box-shadow: none;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: ${theme.colors.white};
    box-shadow: -1px -1px 5px 0px #dff5f7, 7px 7px 20px 0px #65616133,
      4px 4px 5px 0px #625f5f21;
    transition: 400ms ease all;
  }

  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
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
  transition: ${theme.transition.hover};
  &:hover &:focus {
    transform: scale(1.2);
    color: ${theme.colors.white};
  }
`;

export const BackEndIcon = styled(VscGithub)`
  width: 30px;
  height: 30px;
  transition: ${theme.transition.hover};
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
    transition: ${theme.transition.hover};
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
  transition: ${theme.transition.hover};
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
    transition: ${theme.transition.hover};
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
  transition: ${theme.transition.hover};
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
    transition: ${theme.transition.hover};
    top: 6px;
    left: -22px;
  }
  &:hover ${SwaggerIcon} {
    fill: #fff;
    transform: scale(1.2);
  }
`;
