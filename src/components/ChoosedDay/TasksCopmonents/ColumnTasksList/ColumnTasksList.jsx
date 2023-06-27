import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TaskListBox } from './ColumnTasksListStyled';

import { theme } from 'theme';

// import { correctTitle } from '../helper/helper';
export const ColumnTasksList = ({
  toolbarData,
  taskData,
  handleShowModal,
  category,
}) => {
  return (
    <>
      <TaskListBox
        style={{
          borderRadius: '8px',
          background: `${theme.colors.background_mode}`,
          boxShadow: `inset 7px 0px ${theme.colors.third_background_mode}`,
        }}
      >
        {taskData?.map(item => {
          return (
            <TaskColumnCard
              key={item._id}
              item={item}
              toolbarData={toolbarData}
              data={taskData}
              handleShowModal={handleShowModal}
            />
          );
        })}
      </TaskListBox>
    </>
  );
};
