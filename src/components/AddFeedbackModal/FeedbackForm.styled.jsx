import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';


export const Form = styled(FormikForm)`

 display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const RatingLabel = styled.p`
 
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
 

  margin: 0 0 8px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
 
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
 

  margin: 0 0 8px;
`;

export const RatingField = styled(FormikField)`
  display: flex;
  flex-direction: row;
`;



export const  TextareaField = styled(FormikField)`
 width: 100%;
  height: 127px;
 
  border-radius: 8px;
  padding: 14px 18px;
  
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
`;


export const StarsInputOverlay = styled.div`
  display: flex;
  flex-direction: row;
`;


export const ErrorMessage = styled(FormikError)`
  color: #a36303;
  font-weight: 500;
  font-size: 10px;
`;