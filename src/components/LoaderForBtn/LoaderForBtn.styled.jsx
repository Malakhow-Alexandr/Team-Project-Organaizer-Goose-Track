import styled from 'styled-components';

export const SpinBtn = styled.span`
  display: inline-block;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #fff;
  position: relative;
  
  ::before {
    content: '';
    position: absolute;
    left: 17px;
    bottom: 4px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-bottom-color: #ff3d00;
    box-sizing: border-box;
    animation: rotation 0.6s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
