import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuthWithGoogle } from './LoginWithGoogleBtn.styled';

export const LoginWithGoogleBtn = () => {
  const { t } = useTranslation();

  return (
    <AuthWithGoogle href="http://goose-track-verq.onrender.com/google">
      {t('authorizationWith')}&nbsp;
      <span style={{ color: '#4285F4' }}>G</span>
      <span style={{ color: '#EA4335' }}>o</span>
      <span style={{ color: '#FBBC05' }}>o</span>
      <span style={{ color: '#4285F4' }}>g</span>
      <span style={{ color: '#34A853' }}>l</span>
      <span style={{ color: '#EA4335' }}>e</span>
    </AuthWithGoogle>
  );
};
