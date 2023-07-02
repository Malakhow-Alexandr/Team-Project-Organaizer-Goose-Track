import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const SpinWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const Spin = styled.span`
  position: relative;
  display: flex;

  :before,
  :after {
    content: '';
    width: 15px;
    height: 15px;
    display: inline-block;
    position: relative;
    margin: 0 5px;
    border-radius: 50%;
    color: #fff;
    background: currentColor;
    box-shadow: 50px 0, -50px 0;
    animation: left 1s infinite ease-in-out;
  }
  :after {
    color: #2b78ef;
    animation: right 1.1s infinite ease-in-out;
  }

  @keyframes right {
    0%,
    100% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
  }

  @keyframes left {
    0%,
    100% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
