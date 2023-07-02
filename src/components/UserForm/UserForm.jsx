import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateUser } from 'redux/auth/operations';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment/moment';
import {
  Container,
  Form,
  InputName,
  Avatar,
  AddIcon,
  AvatarDefault,
  SubmitBtn,
  UserName,
  Text,
  StyledDataPicker,
  Input,
  ErrorMessage,
  Wrapper,
  WrapperInput,
} from './UserForm.styled';
import { useTranslation } from 'react-i18next';

const phoneRegexp = /^(\d{2})\s\((\d{3})\)\s(\d{3})\s(\d{2})\s(\d{2})$/;
const skypeNumberRegexp = /^\+[1-9]\d{0,2}[.-]?\d{1,14}$/;
const birthdayRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(35, 'Too Long!')
    .required('Name is required'),
  birthday: Yup.string()
    .notRequired()
    .matches(birthdayRegexp, {
      message: 'Invalid birthday',
    })
    .notRequired(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegexp, {
      message: 'Invalid phone',
    })
    .notRequired(),
  skype: Yup.string()
    .max(16, 'Too Long!')
    .matches(skypeNumberRegexp, {
      message: 'Invalid skype',
    })
    .notRequired(),
  telegram: Yup.string().max(35, 'Too Long!').notRequired(),
});

const UserForm = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { user } = useAuth();
 
  const [userAvatar, setUserAvatar] = useState(user.avatarURL);
  const [birthdayDate, setBirthdayDate] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const { errors, touched, values, handleSubmit, handleBlur, setFieldValue } =
    useFormik({
      initialValues: {
        name: user.name,
        email: user.email,
        avatar: user.avatarURL,
        phone: user.phone,
        birthday: user.birthday,
        telegram: user.telegram,
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        try {
          if (values.avatar === user.avatarURL) {
            const { avatar, ...updatedValues } = values;
            dispatch(updateUser(updatedValues));
          } else {
            dispatch(updateUser(values));
          }
          setIsFormChanged(false);
        } catch (error) {
          console.log(error.message);
        }
      },
    });

  useEffect(() => {
    setFieldValue('name', user.name);
    setFieldValue('email', user.email);
    setFieldValue('phone', user.phone);
    setFieldValue('telegram', user.telegram);
    setFieldValue('birthday', user.birthday);

    setUserAvatar(user.avatarURL);
    setBirthdayDate(user.birthday);
  }, [user, setFieldValue]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFieldValue(name, value);
    setIsFormChanged(true);
  };

  const handleAvatarUpload = event => {
    setFieldValue('avatar', event.currentTarget.files[0]);
    setIsFormChanged(true);
    const file = event.currentTarget.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserAvatar(imageUrl);
    }
  };

  const currentDate = moment().format('DD/MM/YYYY');

  const handleDatePicker = date => {
    if (!date) setFieldValue('birthday', '');
    const formattedDate = moment(date.$d).format('DD/MM/YYYY');
    setFieldValue('birthday', formattedDate);
    setIsFormChanged(true);
  };

  const autoFormatPhoneNumber = event => {
    const phoneNumber = event.target.value.replace(/[^\d]/g, '');

    const countryCode = phoneNumber.slice(0, 2);
    const areaCode = phoneNumber.slice(2, 5);
    const firstPart = phoneNumber.slice(5, 8);
    const secondPart = phoneNumber.slice(8, 10);
    const thirdPart = phoneNumber.slice(10, 12);

    const formattedPhoneNumber = [
      countryCode,
      areaCode ? `(${areaCode})` : '',
      firstPart,
      secondPart,
      thirdPart,
    ]
      .filter(part => part !== '')
      .join(' ')
      .trim();

    setFieldValue('phone', formattedPhoneNumber);
    setIsFormChanged(true);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {/* avatar */}
        <Avatar>
          {userAvatar ? (
            <img src={userAvatar} alt="Avatar" />
          ) : (
            <AvatarDefault />
          )}
        </Avatar>

        <InputName>
          <input
            name="avatar"
            type="file"
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
          />
          <AddIcon />
        </InputName>
        <UserName>{user.name}</UserName>
        <Text>{t('User')}</Text>
        {/* username */}
        <Wrapper>
          <WrapperInput>
            <InputName>{t('User Name')}</InputName>
            <Input
              name="name"
              placeholder="User Name"
              value={values.name || ''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? 'InvalidInput' : ''}
            />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </WrapperInput>
          {/* birthday */}
          <WrapperInput>
            <InputName>{t('Birthday')}</InputName>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDataPicker
                closeOnSelect={true}
                slotProps={{
                  textField: {
                    placeholder: birthdayDate || `${currentDate}`,
                  },
                }}
                onChange={handleDatePicker}
                name="birthday"
                views={['year', 'month', 'day']}
                format="DD/MM/YYYY"
              />
            </LocalizationProvider>
          </WrapperInput>
          {/* email */}
          <WrapperInput>
            <InputName>{t('Email')} </InputName>
            <Input
              name="email"
              value={values.email || ''}
              placeholder="Email"
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'InvalidInput' : ''}
            />
            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </WrapperInput>
          {/* phone */}
          <WrapperInput>
            <InputName>{t('Phone')}</InputName>
            <Input
              name="phone"
              placeholder="ex. 01 (234) 567 89 01"
              value={values.phone || ''}
              onChange={autoFormatPhoneNumber}
              onBlur={handleBlur}
              className={errors.phone && touched.phone ? 'InvalidInput' : ''}
            />
            {errors.phone && touched.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            )}
          </WrapperInput>
          {/* telegram */}
          <WrapperInput>
            <InputName>{t('Telegram')}</InputName>
            <Input
              name="telegram"
              value={values.telegram || ''}
              placeholder="Add your telegram"
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={errors.telegram && touched.telegram ? 'InvalidInput' : ''}
            />
            {errors.telegram && touched.telegram && (
              <ErrorMessage>{errors.telegram}</ErrorMessage>
            )}
          </WrapperInput>
        </Wrapper>
        <SubmitBtn disabled={!isFormChanged} type="submit">
          {t('Save changes')}
        </SubmitBtn>
      </Form>
    </Container>
  );
};

export default UserForm;
