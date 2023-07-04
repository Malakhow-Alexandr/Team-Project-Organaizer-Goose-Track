import styled from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  gap: 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.bgBlue};

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const FormWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 374px) {
    width: 90%;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 49px;

  img {
    display: block;
    width: 400px;
    height: auto;
  }

  @media screen and (max-width: 1399px) {
    display: none;
  }
`;
