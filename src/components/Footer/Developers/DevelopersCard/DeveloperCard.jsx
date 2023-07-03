import React from 'react';
import sprite from '../../../../icons/sprite.svg';
import {
  Avatar,
  AvatarWrapper,
  CardContainer,
  Icon,
  Link,
  Name,
  Position,
  SocialLinkItem,
  SocialLinks,
} from './DeveloperCard.styled';

export const DeveloperCard = ({ developer }) => {
  return (
    <CardContainer>
      <AvatarWrapper>
        <Avatar src={developer.avatar} alt={developer.surName} />
      </AvatarWrapper>
      <Name>
        {developer.name} {developer.surName}
      </Name>
      <Position>{developer.position}</Position>

      <SocialLinks>
        {developer.git && (
          <SocialLinkItem>
            <Link
              href={developer.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <use href={sprite + '#icon-github'} />
              </Icon>
            </Link>
          </SocialLinkItem>
        )}

        {developer.linkedin && (
          <SocialLinkItem>
            <Link
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <use href={sprite + '#icon-linkedin'} />
              </Icon>
            </Link>
          </SocialLinkItem>
        )}

        {developer.telegram && (
          <SocialLinkItem>
            <Link
              href={developer.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <use href={sprite + '#icon-send'} />
              </Icon>
            </Link>
          </SocialLinkItem>
        )}
      </SocialLinks>
    </CardContainer>
  );
};
