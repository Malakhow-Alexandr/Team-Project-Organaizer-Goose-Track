import DatePicker from 'sassy-datepicker';
import './CalendarDataPicker.css';

export const CalendarDataPicker = ({ onChange, date }) => {
  return (
    <>
      <DatePicker weekStartsFrom="Monday" onChange={onChange} value={date} />
    </>
  );
};
