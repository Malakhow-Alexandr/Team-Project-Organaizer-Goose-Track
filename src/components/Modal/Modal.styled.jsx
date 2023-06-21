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
  max-width: 303px;
  min-height: 336px;
  box-sizing: border-box;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 16px 4px rgba(17, 17, 17, 0.4);
  @media screen and (min-width: 768px) {
    padding: 40px 28px;
    min-width: 396px;
    max-width: 396px;
    min-height: 360px;
    max-height: 360px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
`;
