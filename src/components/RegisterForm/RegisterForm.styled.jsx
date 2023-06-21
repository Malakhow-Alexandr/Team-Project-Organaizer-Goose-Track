import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormField,
} from 'formik';

export const Form = styled(FormikForm)`
  max-width: 307px;
  margin: 0 auto;
  padding: 40px 24px;
  border-radius: ${props => props.theme.radii.small};
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.background};
`;

export const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
  font-family: ${props => props.theme.fonts.heading};
  font-style: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 1.33;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const FormLabel = styled.label`
  position: relative;
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-bottom: 24px;
  font-family: ${props => props.theme.fonts.heading};
  font-style: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.black};
`;

export const Field = styled(FormField)`
  padding: 14px;
  font-family: ${props => props.theme.fonts.heading};
  font-style: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.black};
  border: ${props => props.theme.borders.normal} rgba(220, 227, 229, 0.6);
  border-radius: 8px;

  ::placeholder {
    font-weight: 400;
  }
`;

export const ErrorMessage = styled(FormikError)``;

export const Button = styled.button`
  display: flex;
  gap: 11px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;

  font-family: ${props => props.theme.fonts.heading};
  font-style: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 1.33;
  color: ${props => props.theme.colors.white};

  letter-spacing: -0.02em;

  background: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.big};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.secondary};
  }
`;
