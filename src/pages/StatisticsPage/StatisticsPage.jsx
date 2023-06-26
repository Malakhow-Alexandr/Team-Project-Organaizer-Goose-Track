import { StatisticsPageContainer } from './StatisticsPage.styled';
import { StatisticsChart } from 'components/StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  return (
    <StatisticsPageContainer>
      <StatisticsChart />
    </StatisticsPageContainer>
  );
};

export default StatisticsPage;
