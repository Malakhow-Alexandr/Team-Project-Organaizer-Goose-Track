import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const HeaderTitle = styled.h3`
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: block;
    margin: 0;
    font-family: ${props => props.theme.fonts.heading};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: 32px;
    line-height: 1;
    color: ${props => props.theme.colors.primary_text_mode};
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }
`;

export const TextMessage = styled.span`
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: inline;
    margin: 0;
    font-family: ${props => props.theme.fonts.heading};
    font-weight: ${props => props.theme.fontWeights.heading};
    font-size: ${props => props.theme.fontSizes.s};
    line-height: ${props => props.theme.lineHeights.body};
    color: ${props => props.theme.colors.black};
  }
`;

export const TextMessageSpan = styled(TextMessage)`
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    color: ${props => props.theme.colors.primary};
  }
`;
