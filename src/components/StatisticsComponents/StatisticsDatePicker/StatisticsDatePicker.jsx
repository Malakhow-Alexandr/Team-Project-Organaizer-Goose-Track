import DatePicker from 'sassy-datepicker';
import './statisticsDatePicker.css';

export const StatisticsDatePicker = ({ onChange, date, open }) => {
  return (
    <>
      <div className="statistics">
        <DatePicker weekStartsFrom="Monday" onChange={onChange} value={date} />
      </div>
    </>
  );
};
