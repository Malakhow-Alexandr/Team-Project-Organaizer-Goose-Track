import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const TaskModal = ({ task_info, onClose }) => {
  const [initialData, setInitialData] = useState(null);
  const { currentDay } = useParams();

  useEffect(() => {
    const { _id, category } = task_info;

    if (_id) {
      setInitialData({ ...task_info, statusOperation: 'edit' });
    } else if (category) {
      setInitialData({
        title: '',
        date: currentDay,
        start: '09:00',
        end: '09:15',
        priority: 'low',
        category,
        statusOperation: 'create',
      });
    } else {
      onClose();
    }
  }, [task_info, onClose, currentDay]);

  return (
    <>
      {!!initialData && (
        <Modal onClose={onClose}>
          <TaskForm initialData={initialData} onClose={onClose}></TaskForm>
        </Modal>
      )}
    </>
  );
};
