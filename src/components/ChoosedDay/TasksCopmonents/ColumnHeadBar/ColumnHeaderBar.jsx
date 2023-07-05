import { useTranslation } from 'react-i18next';
import {
  TaskHeaderBox,
  TaskHeaderBth,
  TaskHeaderTitle,
} from './ColumnHeadBarStyled';

export const ColumnHeadBar = ({ title, handleShowModal }) => {
  const { t } = useTranslation();
  return (
    <TaskHeaderBox>
      <TaskHeaderTitle>{t(title)}</TaskHeaderTitle>
      <TaskHeaderBth onClick={() => handleShowModal({})}>+</TaskHeaderBth>
    </TaskHeaderBox>
  );
};