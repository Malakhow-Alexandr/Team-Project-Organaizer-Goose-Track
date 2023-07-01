import {
  StatisticsPageContainer,
  HeadContainer,
  ChartContainer,
} from './StatisticsPage.styled';
import { StatisticsChart } from 'components/StatisticsComponents/StatisticsChart/StatisticsChart';
import { StatisticsPeriodPaginator } from 'components/StatisticsComponents/StatisticsPaginator/StatisticsPaginator';
import { useState } from 'react';
import { StatisticsInfo } from 'components/StatisticsComponents/StatisticsInfoList/StatisticsInfo';

const StatisticsPage = () => {
  const [selectedDay, setSelectedDay] = useState('');

  const takeCurrentDate = date => {
    if (date) {
      setSelectedDay(date);
    }
  };

  return (
    <StatisticsPageContainer>
      <HeadContainer>
        <StatisticsPeriodPaginator onChange={takeCurrentDate} />
        <StatisticsInfo />
      </HeadContainer>
      <ChartContainer>
        <StatisticsChart selectedDay={selectedDay} />
      </ChartContainer>
    </StatisticsPageContainer>
  );
};

export default StatisticsPage;
