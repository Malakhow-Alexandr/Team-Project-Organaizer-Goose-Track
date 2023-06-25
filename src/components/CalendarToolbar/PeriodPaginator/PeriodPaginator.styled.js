import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${p => p.theme.breakpoints.mobileMax}) {
    width: 100%;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    justify-content: space-around;
    align-items: center;
    margin-top: 33px;
    margin-bottom: 33px;
  }
`;
export const TitleWrapper = styled('span')`
  padding: 6px 12px;
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.primary};
  border-radius: 8px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    padding: 8px 12px;
    font-size: ${p => p.theme.fontSizes.m};
    justify-content: space-around;
    align-items: center;
  }
`;

export const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  border: none;
  margin-left: 8px;
`;
export const Button1 = styled('button')`
  height: 34px;
  width: 38px;
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  color: rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.colors.text};
  }
`;
export const Button2 = styled('button')`
  height: 34px;
  width: 38px;
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  color: rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.colors.text};
  }
`;
