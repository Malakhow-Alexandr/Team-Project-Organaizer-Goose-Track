import styled from 'styled-components';

export const StatisticsPageContainer = styled.section`
  background-color: ${p => p.theme.colors.third_background_switch};
  border-radius: 16px;
  @media screen and (max-width: ${p => p.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 335px;
    border-radius: 16px;
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 1px;
    padding-right: 1px;
  }

  @media screen and (min-width: 376px) and (max-width: 768px) {
    width: 335px;
    border-radius: 16px;
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 14px;
    padding-right: 14px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    padding-top: 100px;
    padding-bottom: 100px;
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

export const HeadContainer = styled.section`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 40px;

  @media screen and (max-width: 375px) {
    max-width: 307px;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 307px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 640px;
  }

  @media screen and (min-width: 1440px) {
    width: 860px;
  }
`;

export const ChartContainer = styled.section`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.third_background_switch};
  border-radius: 20px;
  border: 0.8px solid;
  border-color: ${p => p.theme.colors.statistics_border_color_switch};
  @media screen and (max-width: 375px) {
    display: block;
    max-width: 260px;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 307px;
    height: 413px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 14px;
    padding-right: 14px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 640px;
    height: 424px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 860px;
    height: 440px;
    padding: 40px;
  }
`;
