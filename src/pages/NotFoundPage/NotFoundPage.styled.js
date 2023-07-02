import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background_switch};
`;

export const GoHome = styled.p`
  padding-left: 47px;
  padding-right: 47px;
  color: var(--user-text);
  font-weight: 500;
  text-align: center;
  font-size: 20px;
`;

export const TextWrapper = styled.div`
  position: relative;
  width: 200px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: inherit;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 'auto';
`;

export const TextAccent = styled.p`
  position: absolute;
  top: 50%;
  left: -15%;
  transform: translate(0, -50%);
  font-size: 100px;
  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
  line-height: 150px;

  &:last-child {
    top: 50%;
    left: 80%;
    transform: translate(0, -50%);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    font-size: 200px;
    line-height: 250px;
  }
`;

export const Text = styled.p`
  text-align: center;
  padding-left: 47px;
  padding-right: 47px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: var(--user-text);
  line-height: calc(18 / 14);
  opacity: 0.7;
`;
