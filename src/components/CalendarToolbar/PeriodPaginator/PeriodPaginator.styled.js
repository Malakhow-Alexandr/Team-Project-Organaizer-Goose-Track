import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 14px;
  border: none;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    align-items: center;
  }
`;
export const TitleWrapper = styled.span`
  display: flex;
  width: 140px;
  height: 30px;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 6px 1px;
  margin-right: 8px;
  border: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border-radius: 8px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    display: flex;
    gap: 8px;
    width: 170px;
    height: 34px;
    padding: 8px 1px;
    margin-right: 8px;
    margin-bottom: 0;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  border: none;
`;

export const Button1 = styled.button`
  height: 30px;
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

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    height: 34px;
  }
`;

export const Button2 = styled.button`
  height: 30px;
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

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    height: 34px;
  }
`;
