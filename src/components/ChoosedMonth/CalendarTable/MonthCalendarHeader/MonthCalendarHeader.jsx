import { useResponse } from 'hooks/useResponse';
import {
  WeekendHeaderItem,
  WeekHeaderList,
} from './MonthCalendarHeader.styled';
import { useTranslation } from 'react-i18next';

export const MonthCalendarHeader = () => {
  const mediaResponse = useResponse();
  const isMobile = mediaResponse.isMobile;
  const { t } = useTranslation();

  return (
    <>
      {isMobile ? (
        <WeekHeaderList>
          <li>{t('abbr_Mon')}</li>
          <li>{t('abbr_Tue')}</li>
          <li>{t('abbr_Wed')}</li>
          <li>{t('abbr_Thu')}</li>
          <li>{t('abbr_Fri')}</li>
          <WeekendHeaderItem>{t('abbr_Sat')}</WeekendHeaderItem>
          <WeekendHeaderItem>{t('abbr_Sun')}</WeekendHeaderItem>
        </WeekHeaderList>
      ) : (
        <WeekHeaderList>
          <li>{t('Mon')}</li>
          <li>{t('Tue')}</li>
          <li>{t('Wed')}</li>
          <li>{t('Thu')}</li>
          <li>{t('Fri')}</li>
          <WeekendHeaderItem>{t('Sat')}</WeekendHeaderItem>
          <WeekendHeaderItem>{t('Sun')}</WeekendHeaderItem>
        </WeekHeaderList>
      )}
    </>
  );
};
