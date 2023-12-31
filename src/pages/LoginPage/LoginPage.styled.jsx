import styled from 'styled-components';

export const ImageWrap = styled.div`
  position: absolute;
  bottom: 19px;
  right: 60px;

  img {
    display: block;
    width: 368px;
    height: auto;
  }

  @media screen and (max-width: 1399px) {
    display: none;
  }
`;

export const GoBackBtn = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 30px;
  margin-bottom: 8px;

  font-family: ${props => props.theme.fonts.heading};
  font-style: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.33;
  color: ${props => props.theme.colors.white};

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
