import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  Button,
  ErrorMessage,
  Form,
  Field,
  FormLabel,
  FormTitle,
  IconWrap,
  SuccessMessage,
} from '../RegisterForm/RegisterForm.styled';
import * as Yup from 'yup';
import { FiLogIn } from 'react-icons/fi';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';
import { LoaderForBtn } from 'components/LoaderForBtn/LoaderForBtn';
import { selectAuthIsLoading } from 'redux/auth/selectors';

const regExp =
  /^([A-z0-9_-]+\.)*[A-z0-9_-]+@[A-z0-9_-]+(\.[A-z0-9_-]+)*\.[A-z]{2,6}$/;

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .matches(regExp, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLoading = useSelector(selectAuthIsLoading);

  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(loginUser(values));
        actions.resetForm();
      }}
      validationSchema={FormSchema}
    >
      {({ errors, touched }) => {
        const isValid = field =>
          touched[field] && errors[field]
            ? 'is-invalid'
            : touched[field]
            ? 'is-valid'
            : '';

        return (
          <Form>
            <FormTitle>{t('Log In')}</FormTitle>
            <FormLabel className={isValid('email')}>
              {t('Email')}
              <Field
                className={isValid('email')}
                name="email"
                type="text"
                autoComplete="off"
                placeholder={t('Enter email')}
              />
              {isValid('email') === 'is-valid' && (
                <SuccessMessage>{t('This is a CORRECT email')}</SuccessMessage>
              )}
              <IconWrap>
                {isValid('email') === 'is-valid' && <BiCheckCircle />}
                {isValid('email') === 'is-invalid' && <BiErrorCircle />}
              </IconWrap>
              <ErrorMessage name="email" component="div" />
            </FormLabel>
            <FormLabel className={isValid('password')}>
              {t('Password')}
              <Field
                className={isValid('password')}
                name="password"
                type={passwordType}
                autoComplete="off"
                placeholder={t('Enter password')}
              />
              {isValid('password') === 'is-valid' && (
                <SuccessMessage>
                  {t('This is a CORRECT password')}
                </SuccessMessage>
              )}
              <IconWrap onClick={togglePassword}>
                {passwordType === 'text' ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
              <ErrorMessage name="password" component="div" />
            </FormLabel>
            <Button type="submit">
              {isLoading ? (
                <LoaderForBtn />
              ) : (
                <>
                  {t('Log In')}
                  <FiLogIn strokeWidth="3" />
                </>
              )}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};