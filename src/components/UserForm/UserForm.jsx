import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Field, useFormik } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Form, FormField } from './UserForm.styled';
import moment from 'moment/moment';

const phoneRegexp = /^\+380\d{9}$/;
const skypeNumberRegexp = /^[\w-]{1,16}$/;
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
  phone: '+38097924444',
  birthday: '23.06.2023',
  skype: 'initialSkype',
};

const avatarDefault =
  'data:image/png;base64,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';

const UserForm = () => {
  const [userAvatar, setUserAvatar] = useState(null || user.avatar);
  const [birthdayDate, setBirthdayDate] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleAvatarUpload = event => {
    setFieldValue('avatar', event.currentTarget.files[0]);
    setIsFormChanged(true);
    const file = event.currentTarget.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserAvatar(imageUrl);
    }
  };
  const handleDatePicker = date => {
    if (!date) setFieldValue('birthday', '');
    const formattedDate = moment(date.$d).format('DD/MM/YYYY');
    setFieldValue('birthday', formattedDate);
    setIsFormChanged(true);
  };
  const formatPhoneNumber = value => {
    const phoneNumber = value.replace(/[^\d]/g, ''); // Видаляємо всі нецифрові символи
    const countryCode = phoneNumber.slice(0, 2);
    const areaCode = phoneNumber.slice(2, 5);
    const firstPart = phoneNumber.slice(5, 8);
    const secondPart = phoneNumber.slice(8, 10);
    const thirdPart = phoneNumber.slice(10, 12);
    let formattedPhoneNumber = countryCode;
    if (areaCode) {
      formattedPhoneNumber += ` (${areaCode})`;
    }
    if (firstPart) {
      formattedPhoneNumber += ` ${firstPart}`;
    }
    if (secondPart) {
      formattedPhoneNumber += ` ${secondPart}`;
    }
    if (thirdPart) {
      formattedPhoneNumber += ` ${thirdPart}`;
    }
    return formattedPhoneNumber.trim(); // Видаляємо зайві пробіли з початку та кінця рядка
  };

  const handlePhoneNumberChange = event => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setFieldValue('phone', formattedPhoneNumber);
    isFormChanged(true);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFieldValue(name, value);
    isFormChanged(true);
  };
  const currentDate = moment().format('DD/MM/YYYY');

  const { errors,
    touched,
    values,
    handleSubmit,
    handleBlur,
    setFieldValue,
    isSubmitting,} =
    useFormik({
      initialValues: {
        name: user.name,
        email: user.email,
        avatar: null,
        phone: user.phone,
        birthDate: user.birthday,
        skype: user.skype,
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        console.log('hey');
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

  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <FormField>
          <div>
            {userAvatar ? (
              <img src={userAvatar} alt="Avatar" />
            ) : (
              <img src={avatarDefault} alt="Avatar" />
            )}
          </div>
          <AiFillPlusCircle />
          <Field
            name="avatar"
            type="file"
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
          />
          <div>{user.name}</div>
          <div>User</div>
        </FormField>
        <FormField>
          User Name
          <Field
            name="name"
            placeholder="User Name"
            value={values.name || ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'InvalidInput' : ''}
          />
          {errors.name && touched.name && <div>{errors.name}</div>}
        </FormField>
        <FormField>
          Birthday
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              closeOnSelect={true}
              slotProps={{
                textField: {
                  placeholder: `${currentDate}`,
                },
              }}
              onChange={handleDatePicker}
              name="birthday"
              views={['year', 'month', 'day']}
              format="DD/MM/YYYY"
            />
          </LocalizationProvider>
        </FormField>
        <FormField>
          Email
          <Field
            name="email"
            value={values.email || ''}
            placeholder="Email"
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? 'InvalidInput' : ''}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
        </FormField>
        <FormField>
          Phone
          <Field
            name="phone"
            placeholder=" 38 (ХХХ) ХХХ ХХ ХХ"
            value={values.phone || ''}
            onChange={handlePhoneNumberChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? 'InvalidInput' : ''}
          />
          {errors.phone && touched.phone && <div>{errors.phone}</div>}
        </FormField>
        <FormField>
          Skype
          <Field
            name="skype"
            value={values.skype || ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errors.skype && touched.skype ? 'InvalidInput' : ''}
          />
          {errors.skype && touched.skype && <div>{errors.skype}</div>}
        </FormField>
        <button disabled={isSubmitting || !isFormChanged} type="submit">
          Save changes
        </button>
      </Form>
    </Formik>
  );
};

export default UserForm;
