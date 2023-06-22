import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { FormWrapper, FormContainer } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>
      <AuthNavigate link="/login" text="Log In" />
    </FormContainer>
  );
};

export default RegisterPage;
