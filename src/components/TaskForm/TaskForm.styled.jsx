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

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    padding: 40px 28px;
    max-width: 396px;
    width: 396px;
  }
`;

export const Form = styled.form``;

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
  border: 1px solid ${p => p.theme.colors.user_input_border};
  padding-left: 18px;

  color: ${p => p.theme.colors.primary_text_switch};
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const InputTime = styled.input`
  max-width: 126px;
  height: 42px;
  padding: 12px 14px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid ${p => p.theme.colors.user_input_border};
  cursor: pointer;

  color: ${p => p.theme.colors.primary_text_switch};
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  @media (min-width: 768px) {
    max-width: 163px;
    height: 46px;
    padding: 14px 18px;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  width: 100%;
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
  background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#72C2F8';
      case 'medium':
        return '#F3B249';
      case 'high':
        return '#EA3D65';
      default:
        return 'black';
    }
  }};

  /* Define different colors for each radio button */
  ${RadioContainer}:nth-child(1) ${RadioButtonsInput}:checked + & {
    background-color: #72c2f8;
    border-color: #72c2f8;
    outline: 2px solid #72c2f8;
    outline-offset: 2px;
  }

  ${RadioContainer}:nth-child(2) ${RadioButtonsInput}:checked + & {
    background-color: #f3b249;
    border-color: #f3b249;
    outline: 2px solid#f3b249;
    outline-offset: 2px;
  }

  ${RadioContainer}:nth-child(3) ${RadioButtonsInput}:checked + & {
    background-color: #ea3d65;
    border-color: #ea3d65;
    outline: 2px solid #ea3d65;
    outline-offset: 2px;
  }
`;

export const WrapButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconEditPen = styled(EditPen)`
  width: 14.5px;
  height: 14.5px;
`;

export const IconPlus = styled(Plus)`
  width: 11.67px;
  height: 11.67px;
`;
