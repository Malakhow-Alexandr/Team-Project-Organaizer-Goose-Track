import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { FormWrapper, FormContainer, ImageWrap } from './RegisterPage.styled';
import { useResponse } from 'hooks/useResponse';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoBackBtn } from 'pages/LoginPage/LoginPage.styled';
import { IoMdArrowRoundBack } from 'react-icons/io';

import goose_img from '../../images/register_loginPage/goose_register.png';
import goose_img2x from '../../images/register_loginPage/goose_register@2x.png';
import { LoginWithGoogleBtn } from 'components/LoginWithGoogleBtn/LoginWithGoogleBtn';

const RegisterPage = () => {
  const { isDesktop } = useResponse();
  const location = useLocation();
  const navigate = useNavigate();

  const handelGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <FormContainer>
      <ImageWrap>
        {isDesktop && (
          <img
            srcSet={`${goose_img} 1x, ${goose_img2x} 2x`}
            src={goose_img}
            alt="calendar views"
            width="400"
            height="416"
          />
        )}
      </ImageWrap>
      <FormWrapper>
        <GoBackBtn type="button" onClick={handelGoBack}>
          <IoMdArrowRoundBack />
          Go Back
        </GoBackBtn>
        <RegisterForm />
      </FormWrapper>
      <AuthNavigate link="/login" text="Log In" />
      <LoginWithGoogleBtn />
    </FormContainer>
  );
};

export default RegisterPage;
