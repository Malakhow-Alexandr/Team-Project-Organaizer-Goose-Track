import { ButtonBox, ButtonTask } from './AddTasksBtnStyled';

export const AddTasksBtn = ({ handleShowModal }) => {
  return (
    <ButtonBox>
      <ButtonTask onClick={() => handleShowModal({})}>
        <span>+</span>Add task
      </ButtonTask>
    </ButtonBox>
  );
};
