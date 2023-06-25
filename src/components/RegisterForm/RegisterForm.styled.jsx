import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormField,
} from 'formik';

export const Form = styled(FormikForm)`
  /* width: 100%; */
  margin: 0 auto;
  padding: 40px 24px;
  border-radius: ${p => p.theme.radii.small};
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
  font-family: ${p => p.theme.fonts.heading};
  font-style: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 1.33;
  color: ${p => p.theme.colors.primary};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
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
  margin-bottom: 24px;
  font-family: ${p => p.theme.fonts.heading};
  font-style: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.black};

  :last-of-type {
    margin-bottom: 28px;
  }

  &.is-valid {
    color: ${p => p.theme.colors.greenValid};
  }

  &.is-invalid {
    color: ${p => p.theme.colors.redErrorLight};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
      0px 47px 355px 0px rgba(0, 0, 0, 0.07);

    :last-of-type {
      margin-bottom: 48px;
    }
  }
`;

export const Field = styled(FormField)`
  padding: 14px;
  font-family: ${p => p.theme.fonts.heading};
  font-style: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.normal} rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  outline: none;

  ::placeholder {
    font-weight: 400;
  }

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  }

  &.is-valid {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenValid};
  }

  &.is-invalid {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.redErrorLight};
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.redError};
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
  font-weight: ${p => p.theme.fontWeights.medium};
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

  @media screen and (min-width: 768px) {
    height: 56px;
    font-size: 18px;
  }
`;
