import { useNavigate } from 'react-router';
import { Outlet, useParams } from 'react-router-dom';
import moment from 'moment';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';

const CalendarPage = () => {
  const params = useParams();
  const currentDate = params.currentDate ?? params.currentDay;

  const date = moment(new Date(currentDate));

  const navigate = useNavigate();

  const startDay = date.clone().startOf('month').startOf('week');

  const prevHandler = type => {
    const newDate = date.clone().subtract(1, type).toISOString().split('T')[0];
    navigate(`/calendar/${type}/${newDate}`);
  };
  const nextHandler = type => {
    const newDate = date.clone().add(1, type).toISOString().split('T')[0];
    navigate(`/calendar/${type}/${newDate}`);
  };

  return (
    <>
      <CalendarToolbar
        today={date}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <Outlet context={{ startDay, today: date, currentDate }} />
    </>
  );
};

export default CalendarPage;
