import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';

import {
  HeaderUserInfoSection,
  HeaderUserName,
  HeaderUserPhoto,
  TextAvatar,
} from './UserInfo.styled';

export const UserInfo = ({ toggleShowSideBar }) => {
  const { user } = useAuth();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (!user?.name) {
      setAvatar(null);
    } else {
      setAvatar(user?.name.slice(0, 1).toUpperCase());
    }
  }, [user?.name]);

  return (
    <NavLink
      to="/account"
      style={{ textDecoration: 'none' }}
      onClick={() => toggleShowSideBar(false)}
    >
      <HeaderUserInfoSection>
        <HeaderUserName>{user.name}</HeaderUserName>

        {!user?.avatarURL ? (
          <TextAvatar>{avatar}</TextAvatar>
        ) : (
          <HeaderUserPhoto
            src={user?.avatarURL}
            alt="avatar"
            width="28"
            height="28"
          />
        )}
      </HeaderUserInfoSection>
    </NavLink>
  );
};
