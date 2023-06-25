import styled from 'styled-components';

export const Container = styled.div`
  width: 335px;
  height: 74px;
  padding: 18px 20px;
  background: var(--mainWhite);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  margin-bottom: 14px;
  background-color: ${p => p.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 68px;
    margin-bottom: 16px;
    padding: 14px 32px;
  }
  @media screen and (min-width: 1440px) {
    height: 68px;
    width: 1087px;
    padding: 14px 46px;
  }
`;

export const WeekInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 0px 0px;
`;

export const DayOfWeek = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${p => p.theme.colors.text};
  margin: 0px 0px 4px 0px;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 26px;
  color: ${p => p.theme.colors.text};
`;

export const DateContainer = styled.button`
  text-align: center;
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.m};
  width: 27px;
  height: 26px;
  border-radius: 8px;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 400ms;
  &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.lightBlue};
  }
`;
