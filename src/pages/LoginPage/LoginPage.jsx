import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useResponse } from 'hooks/useResponse';
import { GoBackBtn, ImageWrap } from './LoginPage.styled';
import {
  FormContainer,
  FormWrapper,
} from 'pages/RegisterPage/RegisterPage.styled';
import { IoMdArrowRoundBack } from 'react-icons/io';

import goose_img from '../../images/register_loginPage/goose_login.png';
import goose_img2x from '../../images/register_loginPage/goose_login@2x.png';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { isDesktop } = useResponse();
  const location = useLocation();
  const navigate = useNavigate();

  const handelGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <FormContainer>
      <GoBackBtn type="button" onClick={handelGoBack}>
        <IoMdArrowRoundBack />
        Go Back
      </GoBackBtn>
      <ImageWrap>
        {isDesktop && (
          <img
            srcSet={`${goose_img} 1x, ${goose_img2x} 2x`}
            src={goose_img}
            alt="calendar views"
            width="521"
            height="368"
          />
        )}
      </ImageWrap>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
      <AuthNavigate link="/register" text="Sign Up" />
    </FormContainer>
  );
};

export default LoginPage;
