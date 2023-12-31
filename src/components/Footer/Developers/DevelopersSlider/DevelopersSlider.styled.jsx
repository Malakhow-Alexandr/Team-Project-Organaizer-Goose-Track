import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #fff;
`;

export const ReviewsContainer = styled.section`
  position: relative;
  max-width: 396px;
  min-height: 324px;
  font-family: ${p => p.theme.fonts.text};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 704px;
    max-width: 704px;
    min-height: 360px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 1184px;
    max-width: 1184px;
    min-height: 374px;
  }

  h2 {
    font-size: 28px;
    line-height: 1.14;
    text-align: center;

    margin-top: 0;
    margin-bottom: 40px;

    color: ${p => p.theme.colors.primary};

    @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
      font-size: ${p => p.theme.fontSizes.l};
      line-height: ${p => p.theme.lineHeights.heading};

      margin-bottom: 50px;
    }
  }

  & .slider {
    height: fit-content;
  }

  & .slick-track {
    display: flex;
    @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
      gap: 20px;
    }
  }

  & .slick-list {
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
  }

  & .slick-arrow {
    position: absolute;
    bottom: 0px;
  }

  & svg.svg-arrow {
    width: 39px;
    height: 50px;

    cursor: pointer;

    fill: ${p => p.theme.colors.black};

    &:hover,
    &:focus {
      fill: ${p => p.theme.colors.primary};
    }

    @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
      width: 47px;
      height: 61px;
    }
  }

  & .slick-arrow.slick-prev {
    left: calc(50% + 15px);
  }

  & .slick-arrow.slick-next {
    right: calc(50% + 15px);
  }
`;

export const ArrowContainer = styled.div`
  margin-top: 8px;

  height: 50px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    margin-top: 18px;
    height: 61px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-top: 32px;
    height: 61px;
  }
`;
