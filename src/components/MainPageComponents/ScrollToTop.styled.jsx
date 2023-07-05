import styled from 'styled-components';

export const Container = styled.div`
  #scroll-progress {
    position: fixed;
    right: 15px;

    height: 40px;
    width: 40px;

    display: none;
    place-items: center;

    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: rgb(62, 133, 243);
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 5px 4px ${p => p.theme.colors.primary};

      span {
        stroke: ${p => p.theme.colors.primary};
      }
    }

    @media screen and (min-width: 768px) {
      right: 10px;

      height: 70px;
      width: 70px;
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
`;
