import styled from 'styled-components';

export const Main = styled.div`
  background-color: ${p => p.theme.colors.background};
`;

export const Wrapper = styled.div`
  max-width: 335px;

  margin-left: auto;
  margin-right: auto;
  padding-top: 64px;
  padding-bottom: 64px;

  @media screen and (max-width: 345px) {
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 704px;
    max-width: 704px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 1184px;
    max-width: 1184px;

    padding-bottom: 100px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 335px;

  &:not(:last-child) {
    margin-bottom: 64px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 704px;
    max-width: 704px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 1184px;
    max-width: 1184px;

    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
`;

export const InfoBox = styled.div`
  max-width: 335px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 275px;
    max-width: 275px;

    margin-left: 0;
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-left: 77px;
    margin-bottom: 0;
  }
`;

export const InfoBoxReverse = styled.div`
  max-width: 335px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 275px;
    max-width: 275px;

    margin-right: 0;
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-right: 77px;
    margin-bottom: 0;
  }
`;

export const Number = styled.h1`
  margin-top: 0;
  margin-bottom: 22px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 80px;
  line-height: 0.8;
  letter-spacing: -4px;

  color: ${p => p.theme.colors.primary};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    font-size: 104px;
    line-height: 1.04;

    margin-bottom: 20px;
  }
`;

export const ColorTitle = styled.h1`
  display: inline-block;

  margin-top: 0;
  margin-bottom: 8px;
  padding: 8px 18px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 32px;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.bgBlue};
  border-radius: 44px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    padding: 6px 18px;

    font-size: 40px;
    line-height: ${p => p.theme.lineHeights.heading};
  }
`;

export const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 14px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 32px;
  line-height: ${p => p.theme.lineHeights.body};

  color: ${p => p.theme.colors.blackTitle};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    margin-bottom: 24px;

    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.heading};
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  max-width: 335px;

  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;

  color: ${p => p.theme.colors.text};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 275px;
    max-width: 275px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
