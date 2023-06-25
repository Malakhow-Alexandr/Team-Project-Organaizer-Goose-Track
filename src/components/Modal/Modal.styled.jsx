import styled from 'styled-components';

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
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 40px 18px;
  min-width: 303px;
  min-height: 336px;
  box-sizing: border-box;
  border: ${props => props.theme.borders.normal} rgba(220, 227, 229, 0.8);
  background-color: #ffffff;
  border-radius: ${props => props.theme.radii.small};
  box-shadow: 0px 4px 16px 0px #1111111a;

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

export const IconClose = styled.svg`
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    stroke-width: 0;
    stroke: currentColor;
    fill: ${props => props.theme.colors.black};
  }
`;
