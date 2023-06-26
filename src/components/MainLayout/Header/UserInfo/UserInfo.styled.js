import styled from 'styled-components';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const HeaderUserInfoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderUserName = styled.h3`
  margin: 0;
  font-family: ${props => props.theme.fonts.heading};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 18px;
  color: ${props => props.theme.colors.primary_text_switch};

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    font-size: 18px;
    margin-left: 8px;
  }
`;

export const HeaderUserPhoto = styled.img`
  box-sizing: border-box;

  width: 32px;
  height: 32px;

  border: 1.8px solid ${props => props.theme.colors.primary};
  border-radius: 50%;

  margin-left: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 44px;
    height: 44px;

    margin-left: 14px;
  }
`;

export const TextAvatar = styled.p`
  color: ${props => props.theme.colors.white};
  background-color: ${getRandomColor()};

  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontSizes.xs};
  overflow: hidden;

  margin-top: 0;
  margin-bottom: 0;
  border: 1.8px solid ${props => props.theme.colors.primary};
  margin-left: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 767px) {
    width: 44px;
    height: 44px;

    margin-left: 14px;
  }
`;
