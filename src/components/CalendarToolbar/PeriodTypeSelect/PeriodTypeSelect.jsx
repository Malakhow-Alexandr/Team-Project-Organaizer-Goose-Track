import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { Item, List, Link } from './PeriodTypeSelect.styled';
import { useTranslation } from 'react-i18next';

export const PeriodTypeSelect = ({ today, onChangeType }) => {
  const { t } = useTranslation();
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
          {t('Month')}
        </Link>
      </Item>
      <Item>
        <Link
          className={`${isDayRoute ? 'active' : ''} day`}
          to={`day/${moment().format('YYYY-MM-DD')}`}
          onClick={() => onChangeType('day')}
        >
          {t('Day')}
        </Link>
      </Item>
    </List>
  );
};
