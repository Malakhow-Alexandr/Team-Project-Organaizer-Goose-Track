import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';

const ChoosedDay = () => {
  const { currentDay } = useParams();

  const dayFromParams =
    currentDay === ':currentDay'
      ? new Date().toISOString().split('T')[0]
      : currentDay;

  const [choosedDay, setChoosedDay] = useState(dayFromParams);

  useEffect(() => {
    setChoosedDay(dayFromParams);
  }, [dayFromParams, choosedDay]);

  const chooseDay = ({ day, month, year }) => {
    setChoosedDay(`${year}-${month}-${day}`);
  };

  return (
    <>
      <DayCalendarHead clickChooseDay={chooseDay} />
      <TasksColumnsListWrapper></TasksColumnsListWrapper>
    </>
  );
};

export default ChoosedDay;
