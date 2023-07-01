import {
  InfoListContainer,
  InfoListItem,
  InfoTextFirst,
  InfoTextSecond,
} from './StatisticsInfo.styled';

export const StatisticsInfo = () => {
  return (
    <InfoListContainer>
      <InfoListItem>
        <InfoTextFirst>By Day</InfoTextFirst>
      </InfoListItem>
      <InfoListItem>
        <InfoTextSecond>By Month</InfoTextSecond>
      </InfoListItem>
    </InfoListContainer>
  );
};
