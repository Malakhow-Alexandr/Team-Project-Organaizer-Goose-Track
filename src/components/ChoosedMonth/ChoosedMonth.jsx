import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import { selectTasks } from 'redux/tasks/selectors';
import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './CalendarTable/MonthCalendarHeader/MonthCalendarHeader';

const ChoosedMonth = () => {
  const { startDay, today } = useOutletContext();
  const tasks = useSelector(selectTasks);

  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} tasks={tasks} />
    </>
  );
};

export default ChoosedMonth;
