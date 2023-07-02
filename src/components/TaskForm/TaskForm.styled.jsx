import styled from 'styled-components';

import { ReactComponent as EditPen } from '../../icons/editPen.svg';
import { ReactComponent as Plus } from '../../icons/addIcon.svg';

export const WrapForm = styled.div`
  max-width: 303px;
  padding: 10px;
  border-radius: 8px;

  padding: 48px 18px;
  background-color: ${props => props.theme.colors.second_background_switch};
  color: ${p => p.theme.colors.user_text_switch};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    padding: 40px 28px;
    max-width: 396px;
    width: 396px;
  }
`;

export const Form = styled.form`
  /* padding: '40px 28px';
  display: 'block';
  position: 'relative'; */
  /* background-color: ${p => p.theme.colors.modal_window}; */
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 18px;
  color: ${p => p.theme.colors.modal_form_label};
`;

export const Input = styled.input`
  margin-top: 8px;
  height: 46px;
  left: 0px;
  top: 0px;

  background: transparent;
  border-radius: 8px;
  border: ${p => p.theme.colors.user_input_border};
  padding-left: 18px;

  color: ${p => p.theme.colors.primary_text_switch};
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin: 0;
`;

export const EditButton = styled.button`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
  width: 100%;

  background: #3e85f3;
  border-radius: 8px;
  border: none;

  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
`;

export const CancelButton = styled(EditButton)`
  background: #efefef;
  color: #111111;
`;

export const WrapRadio = styled.div`
  margin-top: 10px;
  margin-bottom: 32px;
  display: flex;
  gap: 16px;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButtonsInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioButtonsLabel = styled.label`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  color: ${p => p.theme.colors.third_text_mode};
`;

export const RadioButtonCustom = styled.span`
  position: absolute;
  /* top: 0; */
  left: 0;
  width: 10px;
  height: 10px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;

  /* Define different colors for each radio button */
  ${RadioContainer}:nth-child(1) ${RadioButtonsInput}:checked + & {
    background-color: #72c2f8;
    border-color: #72c2f8;
  }

  ${RadioContainer}:nth-child(2) ${RadioButtonsInput}:checked + & {
    background-color: #f3b249;
    border-color: #f3b249;
  }

  ${RadioContainer}:nth-child(3) ${RadioButtonsInput}:checked + & {
    background-color: #ea3d65;
    border-color: #ea3d65;
  }
`;

export const WrapButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconEditPen = styled(EditPen)`
  width: 14.5px;
  height: 14.5px;
  /* fill: red; */
`;

export const IconPlus = styled(Plus)`
  width: 11.67px;
  height: 11.67px;
  fill: red;
`;
