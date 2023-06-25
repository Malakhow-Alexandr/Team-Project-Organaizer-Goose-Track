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
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.17;
  color: ${props => props.theme.colors.text};
  margin: 0 0 8px;
`;

export const FormField = styled.label`
  margin-bottom: 10px;
`;

export const RatingField = styled(FormikField)`
  display: flex;
  flex-direction: row;
`;

export const TextareaField = styled(FormikField)`
  width: 100%;
  height: 127px;
  padding: 14px 18px;
  border: none;
  background-color: ${props => props.theme.colors.textarea};
  border-radius: ${props => props.theme.radii.small};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.29;

  ::placeholder {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: ${props => props.theme.fontWeights.heading};
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.29;
    color: ${props => props.theme.colors.text};
  }

  :focus {
    outline: none;
  }
`;

export const RatingInputOverlay = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ErrorMessage = styled(FormikError)`
  color: #a36303;
  font-weight: 500;
  font-size: 10px;
`;

export const RatingBtnOverlay = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const SaveFeedbackBtn = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 198px;
  height: 46px;

  font-family: ${props => props.theme.fonts.heading};
  font-style: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.33;
  color: ${props => props.theme.colors.white};

  letter-spacing: -0.02em;

  background: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.small};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.secondary};
  }
`;
