import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';


export const Form = styled(FormikForm)`
 margin-top: 40px;
 display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const FormField = styled.label`
  display: flex;
 
  width: 300px;
  color: #7b7979;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  text-shadow: 8px 8px 12px rgba(174, 172, 172, 0.3),
    -8px -8px 12px rgba(164, 162, 162, 0.06);
`;

export const Field = styled(FormikField)`
  display: flex;
  flex-direction: row;
`;

export const ErrorMessage = styled(FormikError)`
  color: #a36303;
  font-weight: 500;
  font-size: 10px;
`;