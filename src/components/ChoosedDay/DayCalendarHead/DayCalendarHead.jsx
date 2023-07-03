import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';

import {
  Container,
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
  DayNumber,
} from './DayCalendarHead.styled';
import { useTranslation } from 'react-i18next';

const chooseIndexOfCurrentDay = date => {
  switch (date.toString().slice(0, 3).toUpperCase()) {
    case 'MON':
      return 0;
    case 'TUE':
      return 1;
    case 'WED':
      return 2;
    case 'THU':
      return 3;
    case 'FRI':
      return 4;
    case 'SAT':
      return 5;
    case 'SUN':
      return 6;
    default:
      return 0;
  }
};
const dateParts = currentDay =>
  currentDay !== ':currentDay'
    ? currentDay?.split('-')
    : format(new Date(), 'yyyy-MM-dd').split('-');

export function DayCalendarHead({ clickChooseDay }) {
  const navigate = useNavigate();
  const { currentDay } = useParams();
  const { t } = useTranslation();

  const year = dateParts(currentDay)?.[0];
  const month = dateParts(currentDay)?.[1] - 1;
  const dayFromParams = dateParts(currentDay)?.[2];

  const currentDate = new Date(year, month, dayFromParams);

  const [choosedDay, setChoosedDay] = useState(dayFromParams);

  const daysOfWeek = [t('MON'), t('TUE'), t('WED'), t('THU'), t('FRI'), t('SAT'), t('SUN')];

  const handleClickDay = (day, dayValue, monthValue, yearValue) => {
    const dateClickObject = {
      weekDay: day,
      day: dayValue,
      month: monthValue,
      year: yearValue,
    };
    setChoosedDay(dayValue);
    clickChooseDay(dateClickObject);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setChoosedDay(dayFromParams);
  }, [currentDay]);

  const weekInfoWrappers = useMemo(
    () =>
      daysOfWeek.map((day, index) => {
        const date = new Date(year, month, dayFromParams);

        const currentDay = index % 7;

        date.setDate(
          currentDate.getDate() + currentDay - chooseIndexOfCurrentDay(date)
        );

        const dayOfWeek = date.toString().slice(0, 3).toUpperCase();
        const dayValue = String(date.getDate()).padStart(2, '0');
        const monthValue = String(date.getMonth() + 1).padStart(2, '0');
        const yearValue = String(date.getFullYear());

        const dateKey = `${day}-${dayValue}-${monthValue}-${yearValue}`;

        const isCurrentDay = date.toDateString().slice(8, 10) === choosedDay;

        return (
          <WeekInfoWrapper key={dateKey}>
            <DayOfWeek key={dayOfWeek}>{t(dayOfWeek)}</DayOfWeek>
            <DateContainer
              key={dateKey}
              onClick={() => {
                handleClickDay(day, dayValue, monthValue, yearValue);
                navigate(
                  `/calendar/day/${yearValue}-${monthValue}-${dayValue}`
                );
              }}
              isCurrentDay={isCurrentDay}
            >
              <DayNumber isCurrentDay={isCurrentDay}>{dayValue}</DayNumber>
            </DateContainer>
          </WeekInfoWrapper>
        );
      }),
    [daysOfWeek, currentDate, currentDay, chooseIndexOfCurrentDay]
  ); /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <Container>
      <DateWrapper>{weekInfoWrappers}</DateWrapper>
    </Container>
  );
}
