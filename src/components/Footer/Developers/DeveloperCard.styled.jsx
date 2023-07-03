import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.muted};
  border-radius: 7px;
  padding-bottom: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const AvatarWrapper = styled.div`
  overflow: hidden;
  height: 270px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Position = styled.p``;

export const SocialLinks = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin-top: 10px;
  padding: 0;
`;

export const SocialLinkItem = styled.li`
  background-color: ${p => p.theme.colors.muted};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.lightBlue};
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Link = styled.a`
  display: inline-flex;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: transform 0.3s, background-color 0.3s;

  &:hover,
  &:focus {
    background-color: #72c2f8;
    transform: scale(1.05);
  }
`;
