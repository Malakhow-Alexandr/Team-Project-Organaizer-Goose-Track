import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  overflow-y: auto;
  background-color: rgba(46, 43, 38, 0.295);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  visibility: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SpinWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const Spin = styled.span`
  display: block;
  /* margin: auto;
  position: relative;
  z-index: 10;
  animation: myAnim 2s ease infinite;

  @keyframes myAnim {
    0% {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    100% {
      transform: scale3d(1, 1, 1);
    }
  } */
`;

export const Image = styled.img`
  max-width: inherit;
`;
