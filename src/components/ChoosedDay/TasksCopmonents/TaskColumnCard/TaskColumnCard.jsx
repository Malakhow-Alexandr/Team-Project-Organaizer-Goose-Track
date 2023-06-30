import {
  TaskListItem,
  TaskStatue,
  TaskText,
  TextAvatar,
  UserPhoto,
} from './TaskColumnCardStyled';
import { TasklToolBar } from '../TaskToolBar/TaskToolBar';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDrag } from 'react-dnd';
import { useAuth } from '../../../../hooks/useAuth';
import { useState, useEffect } from 'react';

export const TaskColumnCard = ({
  toolbarData,
  item,
  handleShowModal,
  disableDrag,
  enableDrag,
}) => {
  const userData = useSelector(selectUser);
  const { user } = useAuth();
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    if (!user?.name) {
      setAvatar(null);
    } else {
      setAvatar(user?.name.slice(0, 1).toUpperCase());
    }
  }, [user?.name]);

  const [{ isDragging }, drag] = useDrag({
    item: {
      id: item._id,
      title: item.title,
      priority: item.priority,
      avatarUrl: userData?.avatarUrl,
      name: userData?.name,
      category: item.category,
    },
    type: 'card',
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <TaskListItem
      ref={drag}
      style={{
        opacity: isDragging ? '0.5' : '1',
        cursor: 'grabbing',
      }}
    >
      <TaskText>{item.title}</TaskText>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        {!user?.avatarURL ? (
          <TextAvatar>{avatar}</TextAvatar>
        ) : (
          <UserPhoto
            src={user?.avatarURL}
            alt="avatar"
            width="28"
            height="28"
          />
        )}
        <TaskStatue priority={item.priority}>{item.priority}</TaskStatue>
        <TasklToolBar
          disableDrag={disableDrag}
          enableDrag={enableDrag}
          toolbarData={toolbarData}
          idData={item._id}
          item={item}
          handleShowModal={handleShowModal}
        />
      </div>
    </TaskListItem>
  );
};
