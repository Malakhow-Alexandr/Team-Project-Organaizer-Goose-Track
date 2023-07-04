import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../icons/x-close.svg';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 40px 18px;
  min-width: 303px;
  min-height: 336px;
  max-height: 95vh;
  box-sizing: border-box;
  border: ${props => props.theme.borders.normal} rgba(220, 227, 229, 0.8);
  background-color: ${props => props.theme.colors.second_background_switch};
  border-radius: ${props => props.theme.radii.small};
  box-shadow: 0px 4px 16px 0px #1111111a;
  border-color: ${props => props.theme.colors.modal_border_color};

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    padding: 40px 28px;
    min-width: 396px;
    min-height: 360px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: block;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const MyCloseIcon = styled(CloseIcon)`
  stroke: ${props => props.theme.colors.primary_text_switch};
  :hover {
    stroke: rgb(62, 133, 243);
    transition: ${props => props.theme.transition.hover};
  }
`;
