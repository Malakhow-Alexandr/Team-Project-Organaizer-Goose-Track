import { useState } from 'react';
import { AddTasksBtn } from '../AddTasksBtn/AddTasksBtn';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeaderBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskModal } from 'components/TaskModal/TaskModal';

import { TaskItem } from './TasksColumnStyled';

export const TasksColumn = ({ taskData, title, category, toolbarData }) => {
  const [showModal, setShowModal] = useState(false);
  const [task_info, setTask_info] = useState(null);

  const onClose = () => {
    setShowModal(false);
  };

  const handleShowModal = task => {
    const { _id } = task;
    if (!_id) task.category = category;
    setTask_info(task);
    setShowModal(true);
  };

  return (
    <>
      <TaskItem data-tour="6">
        <ColumnHeadBar title={title} handleShowModal={handleShowModal} />
        <ColumnTasksList
          toolbarData={toolbarData}
          taskData={taskData}
          onClose={onClose}
          title={title}
          category={category}
          handleShowModal={handleShowModal}
        />
        <AddTasksBtn handleShowModal={handleShowModal} />
      </TaskItem>

      {showModal && <TaskModal task_info={task_info} onClose={onClose} />}
    </>
  );
};
