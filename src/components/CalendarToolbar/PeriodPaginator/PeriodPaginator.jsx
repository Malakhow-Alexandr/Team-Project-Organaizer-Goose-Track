import { useState } from 'react';
import { useNavigate } from 'react-router';
import { format } from 'date-fns';
import { useParams } from 'react-router';
import moment from 'moment';

import { CalendarDataPicker } from '../CalendarDataPicker/CalendarDataPicker';

import {
  Wrapper,
  PeriodPaginatorButton,
  ButtonsWrapper,
  Button1,
  Button2,
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ prevHandler, nextHandler, type }) => {
  const params = useParams();
  const today = moment(params.currentDay ?? params.currentDate, 'YYYY-MM-DD');
  const currentDate = today.format('DD MMMM YYYY');

  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const navigateToDate = newDate => {
    return `/calendar/day/${format(newDate, 'yyyy-MM-dd')}`;
  };

  const onChange = newDate => {
    navigate(navigateToDate(newDate));
    setDate(newDate);
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <PeriodPaginatorButton onClick={handleClick}>
        {type === 'month'
          ? currentDate.slice(3, currentDate.length)
          : currentDate}
      </PeriodPaginatorButton>
      {isOpen ? (
        <CalendarDataPicker open={isOpen} onChange={onChange} value={date} />
      ) : null}
      <ButtonsWrapper>
        <Button1 onClick={() => prevHandler(type)}>&lt;</Button1>
        <Button2 onClick={() => nextHandler(type)}>&gt;</Button2>
      </ButtonsWrapper>
    </Wrapper>
  );
};
export default PeriodPaginator;
