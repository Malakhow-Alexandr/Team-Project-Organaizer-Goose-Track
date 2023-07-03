import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormField,
} from 'formik';

export const Form = styled(FormikForm)`
  margin: 0 auto;
  padding: 40px 24px;
  border-radius: ${p => p.theme.radii.small};
  color: ${p => p.theme.colors.primary_text_switch};
  background-color: ${p => p.theme.colors.background_switch};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    padding: 40px;
    width: 600px;
  }
`;

export const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
  font-family: ${p => p.theme.fonts.heading};
  font-style: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: 18px;
  line-height: 1.33;
  color: ${p => p.theme.colors.primary_text_switch};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    font-size: 24px;
    text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
      0px 47px 355px 0px rgba(0, 0, 0, 0.07);
  }
`;

export const FormLabel = styled.label`
  position: relative;
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-bottom: 34px;
  font-family: ${p => p.theme.fonts.heading};
  font-style: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.primary_text_switch};

  &.is-valid {
    color: ${p => p.theme.colors.greenValid};
  }

  &.is-invalid {
    color: ${p => p.theme.colors.redErrorLight};
  }

  :last-of-type {
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    font-size: ${p => p.theme.fontSizes.s};
    text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
      0px 47px 355px 0px rgba(0, 0, 0, 0.07);

    :last-of-type {
      margin-bottom: 58px;
    }
  }
`;

export const Field = styled(FormField)`
  padding: 14px;
  font-family: ${p => p.theme.fonts.heading};
  font-style: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primary_text_switch};
  border: ${p => p.theme.borders.normal} rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  outline: none;
  background-color: transparent;

  ::placeholder {
    font-weight: 400;
  }

  &:hover,
  &:focus {
    border-radius: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.primary_text_switch};
  }

  &.is-valid {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenValid};
  }

  &.is-invalid {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.redErrorLight};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    padding: 18px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 78px;
  left: 16px;
  color: ${p => p.theme.colors.redErrorLight};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    top: 88px;
  }
`;

export const SuccessMessage = styled.p`
  position: absolute;
  top: 78px;
  left: 16px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    top: 88px;
  }
`;

export const PasswordIsMatch = styled.p`
  position: absolute;
  top: 78px;
  left: 16px;
  color: ${p => p.theme.colors.greenValid};
  font-size: ${p => p.theme.fontSizes.m};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    top: 88px;
  }
`;

export const WrongPassword = styled.p`
  position: absolute;
  top: 78px;
  left: 16px;
  color: ${p => p.theme.colors.redErrorLight};
  font-size: ${p => p.theme.fontSizes.m};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    top: 88px;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 35px;
  right: 10px;
  font-size: 20px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    top: 41px;
    font-size: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 11px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;

  font-family: ${p => p.theme.fonts.heading};
  font-style: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.33;
  color: ${p => p.theme.colors.white};

  letter-spacing: -0.02em;

  background: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.big};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${p => p.theme.colors.secondary};
  }

  &:disabled {
    cursor: default;
    background-color: ${p => p.theme.colors.disabled};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    height: 56px;
    font-size: 18px;
  }
`;

export const BtnForgotPass = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 20px;
  font-size: ${props => props.theme.fontSizes.m};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  color: ${props => props.theme.colors.primary};
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);
  text-decoration-line: underline;
  border: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;
`;
