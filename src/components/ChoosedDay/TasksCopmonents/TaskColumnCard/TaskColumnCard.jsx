import {
  AvatorTaskList,
  TaskListItem,
  TaskStatue,
  TaskText,
  TextAvatar,
} from './TaskColumnCardStyled';
import { TasklToolBar } from '../TaskToolBar/TaskToolBar';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDrag } from 'react-dnd';

export const TaskColumnCard = ({
  toolbarData,
  item,
  handleShowModal,
  disableDrag,
  enableDrag,
}) => {
  const userData = useSelector(selectUser);

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

  const avaFunc = value => {
    if (!value) {
      return;
    } else {
      return value.slice(0, 1).toUpperCase();
    }
  };

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
        {!userData?.avatarUrl ? (
          <TextAvatar>{avaFunc(userData?.name)}</TextAvatar>
        ) : (
          <AvatorTaskList
            src={userData?.avatarUrl}
            alt="avator"
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
