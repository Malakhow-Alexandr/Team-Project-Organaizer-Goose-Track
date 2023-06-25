import {
  WeekendHeaderItem,
  WeekHeaderList,
} from './MonthCalendarHeader.styled';

export const MonthCalendarHeader = () => {
  return (
    <>
      <WeekHeaderList>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <WeekendHeaderItem>Sat</WeekendHeaderItem>
        <WeekendHeaderItem>Sun</WeekendHeaderItem>
      </WeekHeaderList>
    </>
  );
};
