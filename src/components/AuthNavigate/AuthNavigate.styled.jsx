import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthNavLink = styled(Link)`
  font-size: ${props => props.theme.fontSizes.xs};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  color: ${props => props.theme.colors.primary};
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);
  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
