import {
  TitleWrapper,
  HeaderTitle,
  TextMessage,
  TextMessageSpan,
} from './DayPageTitle.styled';

import gooseImg1x from '../../../../images/header/goose_active_task.webp';
import gooseImg2x from '../../../../images/header/goose_active_task@2x.webp';

export const DayPageTitle = () => {
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
        <HeaderTitle>Calendar</HeaderTitle>
        <TextMessage>
          <TextMessageSpan>Let go</TextMessageSpan> of the past and focus on the
          present!
        </TextMessage>
      </div>
    </TitleWrapper>
  );
};
