import { useTranslation } from 'react-i18next';
import {
  InfoListContainer,
  InfoListItem,
  InfoTextFirst,
  InfoTextSecond,
} from './StatisticsInfo.styled';

export const StatisticsInfo = () => {
const { t } = useTranslation();

  return (
    <InfoListContainer>
      <InfoListItem>
        <InfoTextFirst>{t('By Day')}</InfoTextFirst>
      </InfoListItem>
      <InfoListItem>
        <InfoTextSecond>{t('By Month')}</InfoTextSecond>
      </InfoListItem>
    </InfoListContainer>
  );
};
