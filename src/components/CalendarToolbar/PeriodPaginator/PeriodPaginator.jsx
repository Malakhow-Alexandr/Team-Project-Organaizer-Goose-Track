import React from 'react';
import { useParams } from 'react-router';
import moment from 'moment';

import {
  Wrapper,
  TitleWrapper,
  ButtonsWrapper,
  Button1,
  Button2,
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ prevHandler, nextHandler, type }) => {
  const params = useParams();
  const today = moment(params.currentDay ?? params.currentDate, 'YYYY-MM-DD');
  const currentDate = today.format('DD MMMM YYYY');

  return (
    <Wrapper>
      <TitleWrapper>
        {type === 'month'
          ? currentDate.slice(3, currentDate.length)
          : currentDate}
      </TitleWrapper>

      <ButtonsWrapper>
        <Button1 onClick={() => prevHandler(type)}>&lt;</Button1>
        <Button2 onClick={() => nextHandler(type)}>&gt;</Button2>
      </ButtonsWrapper>
    </Wrapper>
  );
};
export default PeriodPaginator;
