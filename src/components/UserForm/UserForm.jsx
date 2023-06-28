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

const phoneRegexp = /^(\d{2})\s\((\d{3})\)\s(\d{3})\s(\d{2})\s(\d{2})$/;
const skypeNumberRegexp = /^\+[1-9]\d{0,2}[.-]?\d{1,14}$/;
const birthdayRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
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
});

// const user = {
//   name: 'initialName',
//   email: 'initialEmail@mail.com',
//   avatar:
//     'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
//   phone: '38 (123) 456 78 90',
//   birthday: '23/06/2023',
//   skype: '+123456789',
// };

// const avatarDefault =
//   'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg';

const UserForm = () => {

  const dispatch = useDispatch();
  const { user } = useAuth();

  const [userAvatar, setUserAvatar] = useState(null || user.avatarURL);
  const [birthdayDate, setBirthdayDate] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const { errors, touched, values, handleSubmit, handleBlur, setFieldValue } =
    useFormik({
      initialValues: {
        name: user.name,
        email: user.email,
        avatar: null,
        phone: user.phone,
        birthday: user.birthday,
        skype: user.skype,
      },
      validationSchema: validationSchema,
      onSubmit: async values => {
        try {
          await dispatch(updateUser(values));
          console.log(values)
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
    setFieldValue('skype', user.skype);
    setFieldValue('birthday', user.birthday);

    setUserAvatar(null || user.avatarURL);
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
        <Text>User</Text>
        {/* username */}
        <Wrapper>
          <WrapperInput>
            <InputName>User Name</InputName>
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
            <InputName>Birthday</InputName>
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
            <InputName>Email </InputName>
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
            <InputName>Phone</InputName>
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
          {/* skype */}
          <WrapperInput>
            <InputName>Skype</InputName>
            <Input
              name="skype"
              value={values.skype || ''}
              placeholder="ex. +1234567890"
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={errors.skype && touched.skype ? 'InvalidInput' : ''}
            />
            {errors.skype && touched.skype && (
              <ErrorMessage>{errors.skype}</ErrorMessage>
            )}
          </WrapperInput>
        </Wrapper>
        <SubmitBtn disabled={!isFormChanged} type="submit">
          Save changes
        </SubmitBtn>
      </Form>
    </Container>
  );
};

export default UserForm;
