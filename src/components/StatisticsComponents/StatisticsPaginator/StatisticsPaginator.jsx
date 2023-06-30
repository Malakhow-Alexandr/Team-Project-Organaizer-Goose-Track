import { useState, useEffect } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { useTranslation } from 'react-i18next';


export const StatisticsPeriodPaginator = ({ onChange }) => {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDateForFront = date => format(date, 'dd MMMM yyyy');

  const formatDataForBack = date => format(date, 'yyyy-MM-dd');

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
      <div>{formatDateForFront(currentDate)}</div>

      <button onClick={handlePreviousDay}>{t('Previous Day')}</button>
      <button onClick={handleNextDay}>{t('Next Day')}</button>
    </div>
  );
};
