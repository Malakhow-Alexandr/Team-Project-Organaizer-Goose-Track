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
} from '../PasswordPage/PasswordPage.styled';
import * as Yup from 'yup';
// import { FiLogIn } from 'react-icons/fi';
// import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectAuthIsLoading } from 'redux/auth/selectors';
import { LoaderForBtn } from 'components/LoaderForBtn/LoaderForBtn';
// import { changePassword } from 'redux/auth/operations';

const FormValidSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
});

const PasswordPage = () => {
  const [oldPasswordType, setOldPasswordType] = useState('password');
  const [newPasswordType, setNewPasswordType] = useState('password');

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLoading = useSelector(selectAuthIsLoading);

  const showOldPassword = () => {
    if (oldPasswordType === 'password') {
      setOldPasswordType('text');
      return;
    }
    setOldPasswordType('password');
  };
  const showNewPassword = () => {
    if (newPasswordType === 'password') {
      setNewPasswordType('text');
      return;
    }
    setNewPasswordType('password');
  };

  return (
    <Formik
      initialValues={{
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: '',
      }}
      onSubmit={(values, actions) => {
        console.log('My values 🥥', values);
        // dispatch(changePassword(values.oldPassword, values.newPasswodr));
        actions.resetForm();
      }}
      validationSchema={FormValidSchema}
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
            <FormTitle>{t('Change your password')}</FormTitle>
            <FormLabel className={isValid('oldPassword')}>
              {t('Old password')}
              <Field
                className={isValid('oldPassword')}
                name="oldPassword"
                type={oldPasswordType}
                autoComplete="off"
                placeholder="Enter old password"
              />
              {isValid('oldPassword') === 'is-valid' && (
                <SuccessMessage>
                  {t('This is a CORRECT password')}
                </SuccessMessage>
              )}
              <IconWrap onClick={showOldPassword}>
                {oldPasswordType === 'text' ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
              <ErrorMessage name="oldPassword" component="div" />
            </FormLabel>
            <FormLabel className={isValid('newPassword')}>
              {t('New password')}
              <Field
                className={isValid('newPassword')}
                name="newPassword"
                type={newPasswordType}
                autoComplete="off"
                placeholder="Enter new password"
              />
              {isValid('newPassword') === 'is-valid' && (
                <SuccessMessage>
                  {t('This is a CORRECT password')}
                </SuccessMessage>
              )}
              <IconWrap onClick={showNewPassword}>
                {newPasswordType === 'text' ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
              <ErrorMessage name="newPassword" component="div" />
            </FormLabel>
            <FormLabel className={isValid('repeatNewPassword')}>
              {t('Repeat new password')}
              <Field
                className={isValid('repeatNewPassword')}
                name="repeatNewPassword"
                type={newPasswordType}
                autoComplete="off"
                placeholder="Repeat new password"
              />
              {isValid('repeatNewPassword') === 'is-valid' && (
                <SuccessMessage>
                  {t('This is a CORRECT password')}
                </SuccessMessage>
              )}
              <IconWrap onClick={showNewPassword}>
                {newPasswordType === 'text' ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
              <ErrorMessage name="repeatNewPassword" component="div" />
            </FormLabel>
            <Button type="submit">
              {isLoading ? <LoaderForBtn /> : <>{t('Change')}</>}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PasswordPage;
