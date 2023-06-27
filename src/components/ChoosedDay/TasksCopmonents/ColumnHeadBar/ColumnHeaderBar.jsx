import {
  TaskHeaderBox,
  TaskHeaderBth,
  TaskHeaderTitle,
} from './ColumnHeadBarStyled';

export const ColumnHeadBar = ({ title, handleShowModal }) => {
  return (
    <TaskHeaderBox>
      <TaskHeaderTitle>{title}</TaskHeaderTitle>
      <TaskHeaderBth onClick={() => handleShowModal({})}>+</TaskHeaderBth>
    </TaskHeaderBox>
  );
};
