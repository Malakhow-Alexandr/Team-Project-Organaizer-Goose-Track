// import Avatar from '@mui/material/Avatar';

import {
  ReviewCardContainer,
  HeaderContainer,
  AvatarWrapper,
  StarContainer,
  CommentText,
} from './ReviewCard.styled';

import sprite from 'icons/sprite.svg';

export const ReviewCard = props => {
  return (
    <ReviewCardContainer>
      <HeaderContainer>
        <AvatarWrapper>
          <img src={props.src} alt="User avatar" />
        </AvatarWrapper>

        <div>
          <h3>{props.name}</h3>
          <StarContainer value={props.num}>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
            <li>
              <svg height="14" width="14">
                <use href={sprite + '#star'}></use>
              </svg>
            </li>
          </StarContainer>
        </div>
      </HeaderContainer>
      <CommentText>{props.children}</CommentText>
    </ReviewCardContainer>
  );
};
