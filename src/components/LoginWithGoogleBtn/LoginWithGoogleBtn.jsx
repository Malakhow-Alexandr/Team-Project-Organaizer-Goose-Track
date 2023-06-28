import React from 'react';
import { AuthWithGoogle } from './LoginWithGoogleBtn.styled';

export const LoginWithGoogleBtn = () => {
  const handelGoogleAuth = () => {
    alert('Тут буде авторизація через Google =)');
  };

  return (
    <AuthWithGoogle type="button" onClick={handelGoogleAuth}>
      Authorization with&nbsp;
      <span style={{ color: '#4285F4' }}>G</span>
      <span style={{ color: '#EA4335' }}>o</span>
      <span style={{ color: '#FBBC05' }}>o</span>
      <span style={{ color: '#4285F4' }}>g</span>
      <span style={{ color: '#34A853' }}>l</span>
      <span style={{ color: '#EA4335' }}>e</span>
    </AuthWithGoogle>
  );
};
