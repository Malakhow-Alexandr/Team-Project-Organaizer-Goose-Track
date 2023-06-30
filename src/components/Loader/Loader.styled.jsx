import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  overflow-y: auto;
  background-color: rgba(46, 43, 38, 0.521);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SpinWrap = styled.div`
  height: 120%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const Spin = styled.span`
  display: block;
  margin: auto;
  position: relative;
  animation: myAnim 2s linear infinite forwards;

  @keyframes myAnim {
    0% {
      transform: translateY(800px);
    }

    100% {
      transform: translateY(0px);
      transform: scale(0.5);
      transform-origin: 50% 0%;
    }
  }
`;
