import { useResponse } from 'hooks/useResponse';
import {
  WeekendHeaderItem,
  WeekHeaderList,
} from './MonthCalendarHeader.styled';

export const MonthCalendarHeader = () => {
  const mediaResponse = useResponse();
  const isMobile = mediaResponse.isMobile;

  return (
    <>
      {isMobile ? (
        <WeekHeaderList>
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <WeekendHeaderItem>S</WeekendHeaderItem>
          <WeekendHeaderItem>S</WeekendHeaderItem>
        </WeekHeaderList>
      ) : (
        <WeekHeaderList>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <WeekendHeaderItem>Sat</WeekendHeaderItem>
          <WeekendHeaderItem>Sun</WeekendHeaderItem>
        </WeekHeaderList>
      )}
    </>
  );
};
