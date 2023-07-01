import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { selectTasks } from 'redux/tasks/selectors';
import { getMonthTasks } from 'redux/tasks/operations';
import CalendarTable from './CalendarTable/CalendarTable';
import { MonthCalendarHeader } from './CalendarTable/MonthCalendarHeader/MonthCalendarHeader';

const ChoosedMonth = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);

  moment.updateLocale('en', { week: { dow: 1 } });

  const { currentDate } = useParams();
  const today = moment(currentDate);
  const startDay = today.clone().startOf('month').startOf('week');

  useEffect(() => {
    dispatch(getMonthTasks(currentDate));
  }, [currentDate, dispatch]);

  return (
    <>
      <MonthCalendarHeader />
      <CalendarTable startDay={startDay} today={today} tasks={tasks} />
    </>
  );
};

export default ChoosedMonth;
