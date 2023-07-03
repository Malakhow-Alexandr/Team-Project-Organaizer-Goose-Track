import styled from 'styled-components';

export const SpinToTop = styled.span`
  position: absolute;
  top: 0;
  width: 100%;
  height: 4.8px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
  z-index: 1000;

  ::after {
    content: '';
    width: 192px;
    height: 4.8px;
    background: #2b78ef;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: animloader 2s linear infinite;
  }

  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;
