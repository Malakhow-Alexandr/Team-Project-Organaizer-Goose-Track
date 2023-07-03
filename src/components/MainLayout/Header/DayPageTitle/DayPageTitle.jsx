import {
  TitleWrapper,
  HeaderTitle,
  TextMessage,
  TextMessageSpan,
} from './DayPageTitle.styled';

import gooseImg1x from '../../../../images/header/goose_active_task.webp';
import gooseImg2x from '../../../../images/header/goose_active_task@2x.webp';
import { useTranslation } from 'react-i18next';

export const DayPageTitle = () => {
  const { t } = useTranslation();
  return (
    <TitleWrapper>
      <img
        srcSet={`${gooseImg1x} 1x, ${gooseImg2x} 2x`}
        src={gooseImg1x}
        width="64"
        height="60"
        alt="goose"
      />
      <div>
        <HeaderTitle>{t('Calendar')}</HeaderTitle>
        <TextMessage>
          <TextMessageSpan>{t('Let go')}</TextMessageSpan> {t('of_the past and focus on the present!')}
        </TextMessage>
      </div>
    </TitleWrapper>
  );
};
