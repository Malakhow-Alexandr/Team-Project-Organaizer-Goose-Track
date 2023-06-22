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

const FornSchema = Yup.object().shape({
  name: Yup.string().max(20).required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .required('Required'),
});

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={() => {}}
      validationSchema={FornSchema}
    >
      <Form>
        <FormTitle>Sign Up</FormTitle>
        <FormLabel>
          Name
          <Field
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="div" />
        </FormLabel>
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
          Sign Up
          <FiLogIn strokeWidth="3" />
        </Button>
      </Form>
    </Formik>
  );
};
