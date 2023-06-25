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
import { registerUser } from 'redux/auth/operations';

const regExp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const FormSchema = Yup.object().shape({
  name: Yup.string().min(2).max(35).required('Required'),
  email: Yup.string()
    .matches(regExp, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(registerUser(values));
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
            <FormTitle>Sign Up</FormTitle>
            <FormLabel className={isValid('name')}>
              Name
              <Field
                className={isValid('name')}
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Enter your name"
              />
              {isValid('name') === 'is-valid' && <p>This is a CORRECT name</p>}
              <ErrorMessage name="name" component="div" />
            </FormLabel>
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
              Sign Up
              <FiLogIn strokeWidth="3" />
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
