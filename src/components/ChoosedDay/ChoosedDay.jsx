import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';

import { getDayTasks } from 'redux/tasks/operations';
import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksCopmonents/TasksColumnsList/TasksColumnsList';

const emptySortedTask = {
  done: [],
  inProgress: [],
  toDo: [],
};

const ChoosedDay = () => {
  const dispatch = useDispatch();
  const { currentDay } = useParams();

  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(getDayTasks(currentDay));
  }, [currentDay, dispatch]);

  const [sortedTasks, setSortedTasks] = useState(emptySortedTask);
  // Функція для сортування масиву за полем "start time"
  function sortByStartTime(array) {
    return array.sort((a, b) => b.start.localeCompare(a.start));
  }

  // Функція для фільтрації масиву об'єктів за конкретним днем
  function filterByDate(array, currentDay) {
    return array.filter(item => item.date === currentDay);
  }

  useEffect(() => {
    // Оновлена функція для отримання трьох масивів об'єктів за категорією та відсортованих за датою
    function getCategorizedArrays(data, targetDate) {
      const filteredData = filterByDate(data, targetDate);

      const doneArray = [];
      const inProgressArray = [];
      const toDoArray = [];

      for (const item of filteredData) {
        if (item.category === 'done') {
          doneArray.push(item);
        } else if (item.category === 'in-progress') {
          inProgressArray.push(item);
        } else if (item.category === 'to-do') {
          toDoArray.push(item);
        }
      }

      return {
        done: sortByStartTime(doneArray),
        inProgress: sortByStartTime(inProgressArray),
        toDo: sortByStartTime(toDoArray),
      };
    }

    if (tasks) {
      const categorizedArrays = getCategorizedArrays(tasks, currentDay);
      setSortedTasks(categorizedArrays);
    }
  }, [currentDay, tasks]);

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
      <TasksColumnsListWrapper>
        {sortedTasks && <TasksColumnsList sortedTasksData={sortedTasks} />}
      </TasksColumnsListWrapper>
    </>
  );
};

export default ChoosedDay;
