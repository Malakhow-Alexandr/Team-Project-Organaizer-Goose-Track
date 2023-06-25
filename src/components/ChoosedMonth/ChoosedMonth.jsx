import { useOutletContext } from 'react-router-dom';

import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './CalendarTable/MonthCalendarHeader/MonthCalendarHeader';

const ChoosedMonth = () => {
  const { startDay, today } = useOutletContext();

  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} />
    </>
  );
};

export default ChoosedMonth;
