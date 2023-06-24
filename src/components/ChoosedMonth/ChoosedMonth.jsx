// import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './CalendarTable/MonthCalendarHeader/MonthCalendarHeader';

// import { selectTasks } from 'redux/tasks/selectors';

const ChoosedMonth = () => {
  const { startDay, today } = useOutletContext();
  // const tasks = useSelector(selectTasks);
  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} />
    </>
  );
};

export default ChoosedMonth;
