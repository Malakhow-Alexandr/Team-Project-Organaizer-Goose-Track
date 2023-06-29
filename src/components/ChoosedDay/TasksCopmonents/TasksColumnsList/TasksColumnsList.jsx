import { TasksColumn } from '../TasksColumn/TasksColumn';
import { StretchContainer, TaskContainer } from './TasksColumnsListStyled';
import { correctTitle } from '../helper/helper';
import { toolTitle } from '../helper/helper';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { useEffect, useState } from 'react';

export const TasksColumnsList = ({ sortedTasksData }) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px) and (max-width: 1440px)').matches
  );

  const { done, inProgress, toDo } = sortedTasksData;

  //Ключі заголовків колонок
  const dataTitle = Object.keys(sortedTasksData);

  const option = {
    delayTouchStart: 300,
  };
  useEffect(() => {
    window
      .matchMedia('(min-width: 768px) and (max-width: 1440px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <DndProvider
      backend={matches ? TouchBackend : HTML5Backend}
      options={option}
    >
      <TaskContainer data-tour="5">
        <StretchContainer>
          <TasksColumn
            toolbarData={[toolTitle(dataTitle[1]), toolTitle(dataTitle[0])]}
            title={correctTitle(dataTitle[2])}
            taskData={toDo}
            category="to-do"
          />
          <TasksColumn
            toolbarData={[toolTitle(dataTitle[0]), toolTitle(dataTitle[2])]}
            title={correctTitle(dataTitle[1])}
            taskData={inProgress}
            category="in-progress"
          />
          <TasksColumn
            toolbarData={[toolTitle(dataTitle[2]), toolTitle(dataTitle[1])]}
            title={correctTitle(dataTitle[0])}
            taskData={done}
            category="done"
          />
        </StretchContainer>
      </TaskContainer>
    </DndProvider>
  );
};
