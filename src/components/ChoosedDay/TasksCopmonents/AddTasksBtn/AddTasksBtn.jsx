import { useTranslation } from 'react-i18next';
import { ButtonBox, ButtonTask } from './AddTasksBtnStyled';

export const AddTasksBtn = ({ handleShowModal }) => {
  const { t } = useTranslation();
  return (
    <ButtonBox>
      <ButtonTask onClick={() => handleShowModal({})}>
        <span>+</span>{t('Add task')}
      </ButtonTask>
    </ButtonBox>
  );
};
