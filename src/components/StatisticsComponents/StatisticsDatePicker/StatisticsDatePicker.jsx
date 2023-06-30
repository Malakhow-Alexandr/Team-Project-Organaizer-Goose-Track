import DatePicker from 'sassy-datepicker';
import './statisticsDatePicker.css';

export const StatisticsDatePicker = ({ onChange, date }) => {
  return (
    <>
      <div className="statistics">
        <DatePicker weekStartsFrom="Monday" onChange={onChange} value={date} />
      </div>
    </>
  );
};
