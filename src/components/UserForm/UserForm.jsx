import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Form, FormField } from './UserForm.styled';
import moment from 'moment/moment';

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

const user = {
  name: 'initialName',
  email: 'initialEmail@mail.com',
  avatar:
    'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  phone: '38 (123) 456 78 90',
  birthday: '23/06/2023',
  skype: '+123456789',
};

const avatarDefault =
  'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg';

const UserForm = () => {
  const [userAvatar, setUserAvatar] = useState(null || user.avatar);
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
          console.log(values);
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

    setUserAvatar(null || user.avatar);
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
    <div>
      <Form onSubmit={handleSubmit}>
        {/* avatar */}
        <div>
          {userAvatar ? (
            <img src={userAvatar} alt="Avatar" />
          ) : (
            <img src={avatarDefault} alt="Avatar" />
          )}
        </div>
        <FormField>
          <input
            name="avatar"
            type="file"
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
          />
          <AiFillPlusCircle />
        </FormField>
        <div>{user.name}</div>
        <div>User</div>
        {/* username */}
        <FormField>
          User Name
          <input
            name="name"
            placeholder="User Name"
            value={values.name || ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.name && touched.name && <div>{errors.name}</div>}
        </FormField>
        {/* birthday */}
        <FormField>
          Birthday
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
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
        </FormField>
        {/* email */}
        <FormField>
          Email
          <input
            name="email"
            value={values.email || ''}
            placeholder="Email"
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? 'InvalidInput' : ''}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
        </FormField>
        {/* phone */}
        <FormField>
          Phone
          <input
            name="phone"
            placeholder="ex. 01 (234) 567 89 01"
            value={values.phone || ''}
            onChange={autoFormatPhoneNumber}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? 'InvalidInput' : ''}
          />
          {errors.phone && touched.phone && <div>{errors.phone}</div>}
        </FormField>
        {/* skype */}
        <FormField>
          Skype
          <input
            name="skype"
            value={values.skype || ''}
            placeholder="ex. +1234567890"
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.skype && touched.skype ? 'InvalidInput' : ''}
          />
          {errors.skype && touched.skype && <div>{errors.skype}</div>}
        </FormField>
        <button disabled={!isFormChanged} type="submit">
          Save changes
        </button>
      </Form>
    </div>
  );
};

export default UserForm;

