import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import {
  GridWrapper,
  CellWrapper,
  RowInCell,
  ShowDayWrapper,
  DayWrapper,
  CurrentDay,
} from './CalendarTable.styled';

const CalendarTable = ({ startDay, today }) => {
  const navigate = useNavigate();
  const totalDays = 42;

  const day = startDay.clone().subtract(1, 'day');

  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');

  return (
    <>
      <GridWrapper>
        {daysMap.map(dayItem => (
          <CellWrapper
            isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}
            type="button"
            onClick={() =>
              isSelectedMonth(dayItem) &&
              navigate(`/calendar/day/${dayItem.format('YYYY-MM-DD')}`)
            }
          >
            <RowInCell justifyContent={'flex-end'}>
              <ShowDayWrapper>
                <DayWrapper>
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </DayWrapper>
              </ShowDayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
};

export default CalendarTable;
