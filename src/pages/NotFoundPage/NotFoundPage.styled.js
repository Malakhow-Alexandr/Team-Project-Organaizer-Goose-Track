import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.second_background_switch};
`;

export const GoHome = styled.p`
  color: var(--text-error-color);
  font-weight: 500;
  text-align: center;
  font-size: 20px;
`;

export const TextWrapper = styled.div`
  position: relative;
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
  font-size: 200px;
  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
  line-height: 250px;

  &:last-child {
    top: 50%;
    left: 80%;
    transform: translate(0, -50%);
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${props => props.theme.colors.second_background_switch};
  opacity: 0.7;
`;
