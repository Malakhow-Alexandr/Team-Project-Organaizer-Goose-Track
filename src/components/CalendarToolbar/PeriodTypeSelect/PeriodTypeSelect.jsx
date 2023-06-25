import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { Item, List, Link } from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({ today, onChangeType }) => {
  const location = useLocation();
  const isMonthRoute = location.pathname.includes('month');
  const isDayRoute = location.pathname.includes('day');

  return (
    <List>
      <Item>
        <Link
          className={`${isMonthRoute ? 'active' : ''} month`}
          to={`month/${today.format('YYYY-MM-DD')}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </Link>
      </Item>
      <Item>
        <Link
          className={`${isDayRoute ? 'active' : ''} day`}
          to={`day/${moment().format('YYYY-MM-DD')}`}
          onClick={() => onChangeType('day')}
        >
          Day
        </Link>
      </Item>
    </List>
  );
};
