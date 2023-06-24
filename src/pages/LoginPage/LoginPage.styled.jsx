import styled from 'styled-components';

export const ImageWrap = styled.div`
  position: absolute;
  bottom: 16px;
  right: 60px;
  width: 368px;
  height: 521px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1399px) {
    display: none;
  }
`;

export const GoBackBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;

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
  border-radius: ${props => props.theme.radii.small};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.secondary};
  }
`;
