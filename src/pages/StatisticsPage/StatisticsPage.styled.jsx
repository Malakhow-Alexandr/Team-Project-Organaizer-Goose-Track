import styled from 'styled-components';

export const StatisticsPageContainer = styled.section`
  background-color: ${p => p.theme.colors.third_background_switch};
  border-radius: 16px;
  @media screen and (max-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 335px;
    border-radius: 16px;
    padding-top: 28px;
    padding-bottom: 135px;
    padding-left: 14px;
    padding-right: 14px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    height: 100px;
    padding-top: 140px;
    padding-bottom: 224px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding-top: 142px;
    padding-bottom: 104px;
    padding-left: 113px;
    padding-right: 114px;
  }
`;
