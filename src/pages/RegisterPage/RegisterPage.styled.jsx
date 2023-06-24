import styled from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.bgBlue};
`;

export const FormWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 335px;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    margin-bottom: 24px;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 49px;
  width: 400px;
  height: 416px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1399px) {
    display: none;
  }
`;
