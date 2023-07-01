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
  /* align-items: center; */
  /* position: relative; */
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    justify-content: space-between;
    /* align-items */
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
