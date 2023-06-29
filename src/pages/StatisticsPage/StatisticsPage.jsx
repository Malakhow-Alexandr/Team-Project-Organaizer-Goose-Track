import {
  StatisticsPageContainer,
  HeadContainer,
  ChartContainer,
} from './StatisticsPage.styled';
import { StatisticsChart } from 'components/StatisticsComponents/StatisticsChart/StatisticsChart';
import { StatisticsPeriodPaginator } from 'components/StatisticsComponents/StatisticsPaginator/StatisticsPaginator';
import { useState } from 'react';

const StatisticsPage = () => {
  const [choosedDay, setChoosedDay] = useState('');

  const takeCurrentDate = date => setChoosedDay(date);

  return (
    <StatisticsPageContainer>
      <HeadContainer>
        <StatisticsPeriodPaginator onChange={takeCurrentDate} />
      </HeadContainer>
      <ChartContainer>
        <StatisticsChart choosedDay={choosedDay} />
      </ChartContainer>
    </StatisticsPageContainer>
  );
};

export default StatisticsPage;
