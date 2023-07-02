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
  display: block;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const SwaggerIcon = styled(SiSwagger)`
  width: 30px;
  height: 30px;
  transition: all 250ms ease;
  &:hover {
    fill: #fff;
    transform: scale(1.3);
  }
`;

export const FrontEndIcon = styled(VscGithubInverted)`
  width: 30px;
  height: 30px;
  transition: all 250ms ease;
  &:hover {
    fill: #fff;
    transform: scale(1.3);
  }
`;

export const BackEndIcon = styled(VscGithub)`
  width: 30px;
  height: 30px;
  transition: all 250ms ease;
  &:hover {
    fill: #fff;
    transform: scale(1.3);
  }
`;
