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

const FormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
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
      <Form>
        <FormTitle>Log In</FormTitle>
        <FormLabel>
          Email
          <Field
            name="email"
            type="text"
            autoComplete="off"
            placeholder="Enter email"
          />
          <ErrorMessage name="email" component="div" />
        </FormLabel>
        <FormLabel>
          Password
          <Field
            name="password"
            type="password"
            autoComplete="off"
            placeholder="Enter password"
          />
          <ErrorMessage name="password" component="div" />
        </FormLabel>
        <Button type="submit">
          Log In
          <FiLogIn strokeWidth="3" />
        </Button>
      </Form>
    </Formik>
  );
};
