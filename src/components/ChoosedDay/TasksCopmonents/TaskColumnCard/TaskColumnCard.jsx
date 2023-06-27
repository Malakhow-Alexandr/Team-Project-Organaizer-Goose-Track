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

export const TaskColumnCard = ({
  toolbarData,
  item,
  handleShowModal,
  disableDrag,
  enableDrag,
}) => {
  const userData = useSelector(selectUser);

  const avaFunc = value => {
    if (!value) {
      return;
    } else {
      return value.slice(0, 1).toUpperCase();
    }
  };

  return (
    <TaskListItem>
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
