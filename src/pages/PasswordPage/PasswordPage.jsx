import React, { useState, useEffect } from 'react';
import { Formik, useFormikContext } from 'formik';
import {
  Button,
  ErrorMessage,
  Form,
  Field,
  FormLabel,
  FormTitle,
  IconWrap,
  SuccessMessage,
  PasswordIsMatch,
  WrongPassword,
  BtnForgotPass,
} from '../PasswordPage/PasswordPage.styled';
import * as Yup from 'yup';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectAuthIsLoading } from 'redux/auth/selectors';
import { LoaderForBtn } from 'components/LoaderForBtn/LoaderForBtn';
import { PassDifficultyScale } from '../../components/passDifficultyScale/passDifficultyScale';
import { changePassword } from 'redux/auth/operations';

const FormValidSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
  newPassword: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
  repeatNewPassword: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
});

const PasswordPage = () => {
  // Oleksandr Filippov
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  // Oleksandr Filippov
  const [oldPasswordType, setOldPasswordType] = useState('password');
  const [newPasswordType, setNewPasswordType] = useState('password');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLoading = useSelector(selectAuthIsLoading);

  const initialState = {
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  };

  const passwordIsMatch =
    newPassword === repeatNewPassword && newPassword !== '';

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

  const resetForm = resetFormik => {
    resetFormik();
    setNewPassword('');
    setRepeatNewPassword('');
  };

  const FormObserver = () => {
    const { values, errors } = useFormikContext();

    useEffect(() => {
      if (errors.newPassword) {
        setError(true);
      }
      setPassword(values.newPassword);
    }, [errors.newPassword, values]);

    return null;
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, actions) => {
        dispatch(
          changePassword({
            password: values.oldPassword,
            newPassword: values.newPassword,
          })
        );
        resetForm(actions.resetForm);
      }}
      validationSchema={FormValidSchema}
    >
      {({ errors, touched, values }) => {
        const isValid = field =>
          touched[field] && errors[field]
            ? 'is-invalid'
            : touched[field]
            ? 'is-valid'
            : '';

        return (
          <Form>
            <FormObserver />
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
                value={newPassword || values.newPassword}
                onChange={e => {
                  setNewPassword(e.target.value);
                  values.newPassword = e.target.value;
                }}
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
              <PassDifficultyScale password={password} />
            </FormLabel>

            <FormLabel className={isValid('repeatNewPassword')}>
              {t('Repeat new password')}
              <Field
                className={isValid('repeatNewPassword')}
                name="repeatNewPassword"
                type={newPasswordType}
                value={repeatNewPassword || values.repeatNewPassword}
                onChange={e => {
                  setRepeatNewPassword(e.target.value);
                  values.repeatNewPassword = e.target.value;
                }}
                autoComplete="off"
                placeholder="Repeat new password"
              />
              {passwordIsMatch && (
                <PasswordIsMatch>
                  {t('New passwords are equivalent')}
                </PasswordIsMatch>
              )}
              {!passwordIsMatch && repeatNewPassword && (
                <WrongPassword>{t("Passwords don't match")}</WrongPassword>
              )}
              <IconWrap onClick={showNewPassword}>
                {newPasswordType === 'text' ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
            </FormLabel>

            <Button type="submit" disabled={!passwordIsMatch}>
              {isLoading ? <LoaderForBtn /> : <>{t('Change')}</>}
            </Button>

            <BtnForgotPass
              type="button"
              onClick={() => alert('Wait, soon all will be OK')}
            >
              Forgot your password?
            </BtnForgotPass>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PasswordPage;
