import styled from 'styled-components';

export const Container = styled.div`
  #scroll-progress {
    position: fixed;
    right: 10px;

    height: 40px;
    width: 40px;

    display: none;
    place-items: center;

    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 5px 4px ${p => p.theme.colors.primary};

      span {
        stroke: ${p => p.theme.colors.primary};
      }
    }

    @media screen and (min-width: 768px) {
      right: 50%;
      transform: translate(490%, 0);

      height: 70px;
      width: 70px;
    }

    @media screen and (min-width: 1440px) {
      right: 50%;
      transform: translate(950%, 0);
    }
  }

  #scroll-progress-value {
    display: block;
    height: calc(100% - 10px);
    width: calc(100% - 10px);

    display: grid;
    place-items: center;
    border-radius: 50%;

    background-color: ${p => p.theme.colors.background};

    stroke: ${p => p.theme.colors.blackTitle};

    @media screen and (min-width: 768px) {
      height: calc(100% - 15px);
      width: calc(100% - 15px);
    }

    svg {
      width: 20px;
      height: 20px;

      @media screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
      }
    }
  }
  .hidden {
    display: none;
  }

  .rocket-start {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 270px;

    @media screen and (min-width: 768px) {
      right: 120px;
    }

    @media screen and (min-width: 1440px) {
      right: 230px;
    }

    animation-name: changePosition;
    animation-duration: 3000ms;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes changePosition {
      0% {
        bottom: 0%;
      }

      50% {
        bottom: 50%;
      }

      100% {
        bottom: 83%;
      }
    }
  }

  #rocket-value {
  }
  .animation-rocket {
    display: block;

    transform: rotate(-135deg);
    color: transparent;

    svg {
      width: 20px;
      height: 20px;

      @media screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
      }

      animation-name: changeColorAndSize;
      animation-duration: 3000ms;
      animation-timing-function: linear;
      animation-direction: alternate;

      @keyframes changeColorAndSize {
        0% {
          display: block;

          color: '#3E85F3';
          width: 30px;
          height: 30px;
        }

        25% {
          color: '#3E85F3';
          width: 50px;
          height: 50px;
        }

        50% {
          color: orange;
          width: 70px;
          height: 70px;
        }

        75% {
          color: orange;
          width: 50px;
          height: 50px;
        }

        100% {
          color: red;
          width: 30px;
          height: 30px;
          display: none;
        }
      }
    }
  }
  #bremyl {
    display: none;
    position: fixed;
    top: 50px;
    right: 150px;

    @media screen and (min-width: 768px) {
      right: 0px;
    }

    @media screen and (min-width: 1440px) {
      right: 110px;
    }
  }
  .icon-KKKK {
    fill: red;
  }
  #fire-container {
    display: none;
    font-size: 24px;
    filter: blur(0.4px);
    -webkit-filter: blur(0.4px);
    position: fixed;
    top: 180px;
    right: 240px;
    width: 5px;
    height: 10px;

    @media screen and (min-width: 768px) {
      right: 90px;
    }

    @media screen and (min-width: 1440px) {
      right: 200px;
    }
  }

  #fire-container .particle {
    animation: rise 1s ease-in infinite;
    background-image: radial-gradient(#ff5000 30%, rgba(255, 80, 0, 0) 70%);
    border-radius: 50%;
    mix-blend-mode: screen;
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 10px;
  }

  #yeah {
    position: fixed;
    top: 200px;
    left: 200px;
    width: 100px;
    height: 100px;
  }

  #confirm {
    background-color: #fd6408;
    color: #313131;
    transition: all 0.8s;
  }

  #confirm:hover {
    background-color: rgba(255, 255, 255, 0);
    box-shadow: none;
    color: #fd6408;
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(0) scale(1);
    }
    25% {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateY(-10em) scale(0);
    }
  }

  @keyframes fly-away {
    0% {
      opacity: 1;
      filter: blur(1px);
    }

    100% {
      transform: scale(0.3);
      opacity: 0;
      filter: blur(20px);
      border-radius: 50%;
    }
  }
`;
