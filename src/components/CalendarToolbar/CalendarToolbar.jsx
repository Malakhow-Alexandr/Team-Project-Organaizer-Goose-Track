import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PeriodPaginator from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { Wrapper } from './CalendarToolbar.styled';

export const CalendarToolbar = ({ today, prevHandler, nextHandler }) => {
  const [type, setType] = useState('month');

  const location = useLocation();

  const pathname = location.pathname.slice(0, -11);

  useEffect(() => {
    if (pathname.endsWith('/calendar/day')) {
      setType('day');
      return;
    }
    setType('month');
  }, [pathname]);
  return (
    <Wrapper>
      <PeriodPaginator
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        type={type}
      />
      <PeriodTypeSelect today={today} onChangeType={setType} />
    </Wrapper>
  );
};
