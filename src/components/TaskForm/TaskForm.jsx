import { useEffect, useState } from 'react';
import {
  WrapForm,
  Form,
  EditButton,
  FormGroup,
  Input,
  Label,
  RadioButtonsInput,
  RadioButtonsLabel,
  RadioButtonCustom,
  CancelButton,
  RadioContainer,
  WrapRadio,
  WrapButton,
  IconEditPen,
  IconPlus,
} from './TaskForm.styled';

import { updateTask, createTask } from 'redux/tasks/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasksSuccessful, selectError } from 'redux/tasks/selectors';
import { useTranslation } from 'react-i18next';

const emptyTask = {
  title: '',
  start: '00:00',
  end: '00:00',
  priority: 'low',
  category: 'in-progress',
};

export const TaskForm = ({ initialData, onClose }) => {
  const { t } = useTranslation();
  const [informationTask, setInformationTask] = useState(emptyTask);
  const [operation, setOperation] = useState('create');
  const [dateSave, setDataSave] = useState(null);

  const dispatch = useDispatch();
  const successful = useSelector(selectTasksSuccessful);
  const error = useSelector(selectError);

  useEffect(() => {
    const { statusOperation, _id, ...information } = initialData;
    if (_id) information.id = _id;
    setInformationTask(information);
    setOperation(statusOperation);
  }, [initialData]);

  useEffect(() => {
    if (!successful || !dateSave) return;

    onClose();
  }, [dateSave, successful, onClose]);

  useEffect(() => {
    if (!error || !dateSave) return;
    alert(`Data save error`);
  }, [error, dateSave]);

  const handleChange = event => {
    const { name, value } = event.target;
    setInformationTask(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (informationTask.start > informationTask.end) {
      alert('Start time cannot be later than end time');
      return;
    }

    if (operation === 'edit') {
      dispatch(updateTask(informationTask));
    } else {
      dispatch(createTask(informationTask));
    }
    setDataSave(Date.now());
  };

  return (
    <WrapForm>
      <Form onSubmit={handleSubmit}>
        <Label>
          {t('Title')}
          <Input
            type="text"
            placeholder="Enter text"
            name="title"
            value={informationTask.title}
            onChange={handleChange}
            required
          />
        </Label>
        <FormGroup>
          <Label>
            {t('Start')}
            <Input
              id="time"
              type="time"
              name="start"
              value={informationTask.start}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            {t('End')}
            <Input
              type="time"
              name="end"
              value={informationTask.end}
              onChange={handleChange}
              required
            />
          </Label>
        </FormGroup>

        <WrapRadio>
          <RadioContainer>
            <RadioButtonsLabel>
              <RadioButtonsInput
                type="radio"
                value="low"
                name="priority"
                checked={informationTask.priority === 'low'}
                onChange={handleChange}
              />
              <RadioButtonCustom />
              {t('Low')}
            </RadioButtonsLabel>
          </RadioContainer>
          <RadioContainer>
            <RadioButtonsLabel>
              <RadioButtonsInput
                type="radio"
                value="medium"
                name="priority"
                checked={informationTask.priority === 'medium'}
                onChange={handleChange}
              />
              <RadioButtonCustom />
              {t('Medium')}
            </RadioButtonsLabel>
          </RadioContainer>
          <RadioContainer>
            <RadioButtonsLabel>
              <RadioButtonsInput
                type="radio"
                value="high"
                name="priority"
                checked={informationTask.priority === 'high'}
                onChange={handleChange}
              />
              <RadioButtonCustom />
              {t('High')}
            </RadioButtonsLabel>
          </RadioContainer>
        </WrapRadio>

        {/* must be replaced with initialData.id */}
        {operation === 'edit' ? (
          <EditButton type="submit">
            <IconEditPen />
            {t('Edit')}
          </EditButton>
        ) : (
          <WrapButton>
            <EditButton type="submit">
              <IconPlus />
              {t('Add')}
            </EditButton>

            <CancelButton type="button" onClick={onClose}>
              {t('Cancel')}
            </CancelButton>
          </WrapButton>
        )}
      </Form>
    </WrapForm>
  );
};
