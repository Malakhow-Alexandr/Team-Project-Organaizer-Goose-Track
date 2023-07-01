import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { format, addDays, subDays } from 'date-fns';
import { Puff } from 'react-loader-spinner';
import { StatisticsDatePicker } from '../StatisticsDatePicker/StatisticsDatePicker';
import { selectIsLoading } from 'redux/tasks/selectors';
import {
  StatisticsPaginatorDateButton,
  StatisticsDateWrapper,
  StatisticsButton1,
  StatisticsButton2,
  StatisticsChangeButtonsWrapper,
  SpinnerWrapperComponent,
} from './StatisticsPaginator.styled';

export const StatisticsPeriodPaginator = ({ onChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   const handleClickOutside = event => {
  //     console.log(event.currentTarget);
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
  const onDatePickerChange = newDate => {
    setIsOpen(!isOpen);
    setCurrentDate(newDate);
  };

  const formatDateForFront = date => format(date, 'dd MMMM yyyy');

  const formatDataForBack = date => format(date, 'yyyy-MM-dd');

  // Hook для закриття DatePicker
  const outsideReference = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        outsideReference.current &&
        !outsideReference.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  useEffect(() => {
    const formattedDate = formatDataForBack(currentDate);

    onChange(formattedDate);
  }, [currentDate, onChange]);

  const handlePreviousDay = () => {
    const previousDay = subDays(currentDate, 1);
    setCurrentDate(previousDay);
  };

  const handleNextDay = () => {
    const nextDay = addDays(currentDate, 1);
    setCurrentDate(nextDay);
  };

  return (
    <div>
      <StatisticsDateWrapper ref={outsideReference}>
        <StatisticsPaginatorDateButton
          type="button"
          aria-label="DatePicker"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {formatDateForFront(currentDate)}
          <SpinnerWrapperComponent>
            {isLoading && (
              <Puff
                height="28"
                width="28"
                radius={1}
                color="#ffffff"
                ariaLabel="puff-loading"
                visible={true}
              />
            )}
          </SpinnerWrapperComponent>
        </StatisticsPaginatorDateButton>

        {isOpen && (
          <StatisticsDatePicker
            open={isOpen}
            onChange={onDatePickerChange}
            value={currentDate}
          />
        )}

        <StatisticsChangeButtonsWrapper>
          <StatisticsButton1 onClick={handlePreviousDay}>
            &lt;
          </StatisticsButton1>
          <StatisticsButton2 onClick={handleNextDay}>&gt;</StatisticsButton2>
        </StatisticsChangeButtonsWrapper>
      </StatisticsDateWrapper>
    </div>
  );
};
