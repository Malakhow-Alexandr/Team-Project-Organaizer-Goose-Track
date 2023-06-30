import styled from 'styled-components';
import { AiFillPlusCircle, AiOutlineUser } from 'react-icons/ai';
import { DatePicker } from '@mui/x-date-pickers';

export const Container = styled.div`
  max-width: 335px;
  background-color: ${props => props.theme.colors.background_switch};

  @media (min-width: 768px) {
    max-width: 100%;
    min-width: 704px;
  }
  @media (min-width: 1440px) {
    min-width: 1087px;
    max-width: 100%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 59px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${props => props.theme.colors.third_background_switch};
  border-radius: ${props => props.theme.radii.big};

  @media (min-width: 768px) {
    align-items: center;
    padding-top: 40px;
  }
  @media (min-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .InvalidInput {
    border: 1px solid ${props => props.theme.colors.redError};
  }
  .ErrorMsg {
    color: green;
  }
`;

export const Avatar = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  left: calc(50% - 36px);
  top: -36px;
  background-color: white;
  border: 2px solid #3e85f3;
  border-radius: ${props => props.theme.radii.round};
  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.radii.round};
  }
`;
export const AvatarDefault = styled(AiOutlineUser)`
  position: absolute;
  left: calc(50% - 25px);
  top: 5px;
  width: 50px;
  height: 50px;
  @media (min-width: 768px) {
    left: calc(50% - 47px);
    top: 45px;
    width: 95px;
    height: 95px;
  }
  @media (min-width: 1440px) {
    left: calc(50% - 47px);
    top: 65px;
    width: 95px;
    height: 95px;
  }
`;
export const AddIcon = styled(AiFillPlusCircle)`
  position: absolute;
  left: 60%;
  top: 26px;
  width: 14px;
  height: 14px;
  font-size: 12px;
  cursor: pointer;
  color: #3e85f3;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 147px;
    left: 53%;
  }
  @media (min-width: 1440px) {
    top: 170px;
    left: 52%;
  }
`;
export const UserName = styled.p`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.s};
  color: ${props => props.theme.colors.primary_text_switch};
  text-align: center;
`;
export const Text = styled.p`
  margin-top: 4px;
  margin-bottom: 40px;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.user_label_color_switch};
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 1440px) {
    width: 758px;
    flex-direction: initial;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 24px;
  }
`;
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 354px;
  }
  @media (min-width: 1440px) {
    width: 354px;
  }
`;
export const InputName = styled.label`
  font-family: ${props => props.theme.fonts.text};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 400;
  margin-bottom: 8px;
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.user_label_color_switch};
`;
export const Input = styled.input`
  min-width: 250px;
  height: 42px;
  padding-left: 14px;
  padding-right: 14px;
  outline: none;

  border-color: #dbdbdb;
  border-radius: ${props => props.theme.radii.small};
  color: ${props => props.theme.colors.primary_text_switch};

  ${props =>
    props.value &&
    `
    font-family: 'Inter';
    font-size: 14px;
    font-weight:600;
    color: ${props => props.theme.colors.primary_text_switch};
  
  `};

  background-color: transparent;
  &::placeholder {
    font-family: ${props => props.theme.fonts.text};
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.user_input_border_color_switch};
  }
  &:hover,
  &:focus {
    border: 1px solid #111111;
  }
  @media (min-width: 768px) {
    height: 46px;
  }
`;

export const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.redError};
  font-size: 12px;
  margin-top: 3px;
  margin-left: 8px;
  @media (min-width: 768px) {
    margin-top: 4px;
    font-size: 14px;
  }
`;
export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 50px;
  padding-right: 50px;
  width: 200px;
  height: 46px;
  font-family: ${props => props.theme.fonts.text};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.body};
  font-size: ${props => props.theme.fontSizes.s};
  text-align: center;

  color: ${props => props.theme.colors.white};

  border-radius: ${props => props.theme.radii.big};

  border: ${props => props.theme.borders.none};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  background-color: ${props =>
    props.disabled ? '#a7c7f6' : props.theme.colors.primary};
  @media (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
  @media (min-width: 1440px) {
    margin-top: 88px;
  }
`;

export const StyledDataPicker = styled(DatePicker)`
  input {
    padding-left: 0px;
    color: ${props => props.theme.colors.primary_text_switch};
  }
  input::placeholder {
    font-family: ${props => props.theme.fonts.text};
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.user_label_color_switch};
    font-weight: 600;
    opacity: 1;
  }

  /* Input value */
  .MuiInputBase-root {
    position: relative;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 600;
  }
  .MuiButtonBase-root {
    color: ${props => props.theme.colors.calendar_border_color_switch};
  }
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #11111126;
  }

  .MuiOutlinedInput-root {
    min-width: 250px;
    height: 44px;
    padding-left: 14px;
    padding-right: 14px;
    outline: none;
    border: none;
    border-radius: ${props => props.theme.radii.small};

    .MuiOutlinedInput-notchedOutline {
      border: ${props => props.theme.colors.user_input_border_color_switch};
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid #111111;
    }
  }
`;
