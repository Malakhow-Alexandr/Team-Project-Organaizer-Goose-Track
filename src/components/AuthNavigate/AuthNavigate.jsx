import React from 'react';
import { AuthNavLink } from './AuthNavigate.styled';

export const AuthNavigate = ({ link, text }) => {
  return (
    <div>
      <AuthNavLink to={link}>{text}</AuthNavLink>
    </div>
  );
};
