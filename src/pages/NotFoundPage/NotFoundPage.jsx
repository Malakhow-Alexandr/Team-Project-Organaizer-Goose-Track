import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Wrapper,
  GoHome,
  Text,
  Image,
  TextAccent,
  TextWrapper,
} from './NotFoundPage.styled';

import img404x1 from '../../images/notFoundPage/img404@1x.webp';
import img404x2 from '../../images/notFoundPage/img404@2x.webp';
import { t } from 'i18next';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <Wrapper>
      <GoHome>
        {t('You will be relocated to Home Page in')} {countdown} {t('seconds')}
      </GoHome>
      <TextWrapper>
        <TextAccent>4</TextAccent>
        <Image srcSet={`${img404x1} 1x, ${img404x2} 2x`} />
        <TextAccent>4</TextAccent>
      </TextWrapper>
      <Text>
        {t('We’re sorry, the page you requested could not be found.')}
      </Text>
      <Text>{t('Please go back to the homepage.')}</Text>
    </Wrapper>
  );
};

export default NotFoundPage;
