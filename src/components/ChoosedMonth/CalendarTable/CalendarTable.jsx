import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { theme } from 'theme';
import { CalendarTaskDay } from './CalendarTaskDay/CalendarTaskDay';
import {
  GridWrapper,
  CellWrapper,
  RowInCell,
  ShowDayWrapper,
  DayWrapper,
  CurrentDay,
  TaskListWrapper,
  CalendarTableMoreBtn,
} from './CalendarTable.styled';

const CalendarTable = ({ startDay, today, tasks }) => {
  const navigate = useNavigate();
  const totalDays = 42;

  const day = startDay.clone().subtract(1, 'day');

  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');

  const filterTask = calendarDay => {
    if (!tasks || tasks.length === 0) {
      return [];
    }
    let dayTasksFiltered = [
      ...tasks.filter(task => task.date === calendarDay.format('YYYY-MM-DD')),
    ];
    return dayTasksFiltered;
  };

  return (
    <GridWrapper>
      {daysMap.map(dayItem => {
        const dayTasks = filterTask(dayItem);
        return (
          <CellWrapper
            style={{
              color: `${
                isSelectedMonth(dayItem)
                  ? `${theme.colors.third_text_switch}`
                  : 'rgba(169, 169, 169, 0.4)'
              }`,
            }}
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
              <TaskListWrapper>
                {dayTasks.slice(0, 2).map(task => (
                  <li key={task._id}>
                    <CalendarTaskDay task={task} />
                  </li>
                ))}
                {dayTasks
                  .map(tasks => tasks.tasks)
                  .reduce((t1, t2) => t1.concat(t2), []).length > 2 && (
                  <li key="more">
                    <CalendarTableMoreBtn type="button">
                      +{' '}
                      {filterTask(dayItem)
                        .map(tasks => tasks.tasks)
                        .reduce((t1, t2) => t1.concat(t2), []).length - 2}{' '}
                      tasks...
                    </CalendarTableMoreBtn>
                  </li>
                )}
              </TaskListWrapper>
            </RowInCell>
          </CellWrapper>
        );
      })}
    </GridWrapper>
  );
};

export default CalendarTable;
