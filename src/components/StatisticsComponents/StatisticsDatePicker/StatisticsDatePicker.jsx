import DatePicker from 'sassy-datepicker';
import './statisticsDatePicker.css';

export const StatisticsDatePicker = ({ onChange, date }) => {
  return (
    <>
      <DatePicker weekStartsFrom="Monday" onChange={onChange} value={date} />
    </>
  );
};
