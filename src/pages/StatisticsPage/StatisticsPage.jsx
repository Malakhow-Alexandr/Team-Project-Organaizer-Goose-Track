import {
  StatisticsPageContainer,
  ChartContainer,
} from './StatisticsPage.styled';
import { StatisticsChart } from 'components/StatisticsChart/StatisticsChart';
const StatisticsPage = () => {
  return (
    <StatisticsPageContainer>
      <ChartContainer>
        <StatisticsChart />
      </ChartContainer>
    </StatisticsPageContainer>
  );
};

export default StatisticsPage;
