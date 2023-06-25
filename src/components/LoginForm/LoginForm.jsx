import React from 'react';
import { Formik } from 'formik';
import {
  Button,
  ErrorMessage,
  Form,
  Field,
  FormLabel,
  FormTitle,
} from '../RegisterForm/RegisterForm.styled';
import * as Yup from 'yup';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

const regExp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

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
            <FormTitle>Log In</FormTitle>
            <FormLabel className={isValid('email')}>
              Email
              <Field
                className={isValid('email')}
                name="email"
                type="text"
                autoComplete="off"
                placeholder="Enter email"
              />
              {isValid('email') === 'is-valid' && (
                <p>This is a CORRECT email</p>
              )}
              <ErrorMessage name="email" component="div" />
            </FormLabel>
            <FormLabel className={isValid('password')}>
              Password
              <Field
                className={isValid('password')}
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Enter password"
              />
              {isValid('password') === 'is-valid' && (
                <p>This is a CORRECT password</p>
              )}
              <ErrorMessage name="password" component="div" />
            </FormLabel>
            <Button type="submit">
              Log In
              <FiLogIn strokeWidth="3" />
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
