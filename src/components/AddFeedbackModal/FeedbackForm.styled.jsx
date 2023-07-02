import styled from 'styled-components';
import { CgTrash } from 'react-icons/cg';
import { RxPencil1 } from 'react-icons/rx';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const FeedbackFormContainer = styled.div`
  background-color: ${props => props.theme.colors.modal_window};
  padding: 20px 29px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    padding: 32px;
  }
`;

export const Form = styled(FormikForm)`
  width: 296px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;
  margin-right: auto;

  background-color: ${props => props.theme.colors.modal_window};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 404px;
  }
`;

export const Title = styled.p`
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

// export const RatingField = styled(FormikField)`
//   display: flex;
//   flex-direction: row;
// `;

export const TextareaField = styled(FormikField)`
  width: 296px;
  height: 130px;
  padding: 12px 14px;
  border: 1px solid ${props => props.theme.colors.textarea};
  background: ${props => props.theme.colors.background_switch};
  border-radius: ${props => props.theme.radii.small};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.29;
  resize: none;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);

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

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 404px;
    height: 127px;
    padding: 14px 18px;
  }
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

export const CancelFeedbackBtn = styled.button`
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
  color: ${props => props.theme.colors.text};

  letter-spacing: -0.02em;

  background: #e5edfa;
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.small};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.secondary};
  }
`;

export const EditFeedbackBtn = styled.button`
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

export const EditButtonContainer = styled.div`
  height: 30px;
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: baseline;
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 5px;
`;

export const PencilBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props =>
    props.theme.colors.side_bar_hover_task_buttons_background_switch};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.primary};
  }
`;

export const TrashBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props =>
    props.theme.colors.side_bar_hover_task_buttons_background_switch};
  cursor: pointer;
  &:hover,
  &:focus {
    background: #ea3d65;
  }
`;

export const Pencil = styled(RxPencil1)`
  color: #3e85f3;
  size: 16;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;
export const Trash = styled(CgTrash)`
  color: #ea3d65;
  size: 16;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;
