import {
  PeriodPaginatorButton,
  Button1,
  Button2,
} from 'components/CalendarToolbar/PeriodPaginator/PeriodPaginator.styled';
import styled from 'styled-components';
import { theme } from 'theme';

export const StatisticsDateWrapper = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    margin-bottom: 20px;
    justify-content: space-between;
  }
`;

export const StatisticsPaginatorDateButton = styled(PeriodPaginatorButton)``;

export const StatisticsChangeButtonsWrapper = styled.div``;

export const StatisticsButton1 = styled(Button1)`
  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 25px;
    height: 25px;
  }
`;

export const StatisticsButton2 = styled(Button2)`
  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 25px;
    height: 25px;
  }
`;

export const SpinnerWrapperComponent = styled.span`
  position: absolute;
  top: 2;

  @media screen and (max-width: 767px) {
    left: 110px;
  }
  @media screen and (min-width: 768px) {
    left: 135px;
  }
`;
