import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { LoginForm } from 'components/LoginForm/LoginForm';
import {
  FormContainer,
  FormWrapper,
} from 'pages/RegisterPage/RegisterPage.styled';

const LoginPage = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
      <AuthNavigate link="/register" text="Sign Up" />
    </FormContainer>
  );
};

export default LoginPage;
