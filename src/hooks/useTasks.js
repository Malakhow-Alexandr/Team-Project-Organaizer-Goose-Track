import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { selectTasks } from '../redux/tasks/selectors';
import { getAllTasks } from '../redux/tasks/operations';

export const useTasks = () => {
  const dispatch = useDispatch();
  const { currentDay, currentDate } = useParams();
  const workDate = currentDate || currentDay;

  const [numActiveMonth, setActiveMonth] = useState(null);
  const [isNotDoneTask, setIsNotDoneTask] = useState(false);
  const prevNumMonth = useRef(null);

  const tasks = useSelector(selectTasks);

  useEffect(() => {
    if (tasks.length > 0) {
      const foundNotDoneTask = tasks.find(
        element => element.category !== 'done'
      );
      setIsNotDoneTask(!!foundNotDoneTask);
    }
  }, [tasks]);

  useEffect(() => {
    if (!currentDay) {
      setIsNotDoneTask(false);
      return;
    }

    const foundNotDoneTask = tasks.find(
      element => element.date === currentDay && element.category !== 'done'
    );

    setIsNotDoneTask(!!foundNotDoneTask);
  }, [currentDay, tasks]);

  useEffect(() => {
    if (!workDate) return;

    const month = workDate.split('-')[1];
    setActiveMonth(month);
  }, [workDate]);

  useEffect(() => {
    if (!workDate) return;

    if (prevNumMonth.current !== numActiveMonth) {
      dispatch(getAllTasks(workDate));
      prevNumMonth.current = numActiveMonth;
    }
  }, [numActiveMonth, workDate, dispatch]);

  return { tasks, isNotDoneTask };
};
