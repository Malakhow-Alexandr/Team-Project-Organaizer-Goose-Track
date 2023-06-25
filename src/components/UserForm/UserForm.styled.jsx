import styled from "styled-components";

export const Container = styled.div`
  max-width: 375px;
  padding-bottom: 40px;

  background-color: ${props => props.theme.colors.background_switch};

  @media (min-width: 768px) {
    max-width: 100%;
    min-width: 768px;
    padding-bottom: 38px;
  }
  @media (min-width: 1440px) {
    max-width: 100%;
    padding-bottom: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 59px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${props => props.theme.colors.second_background_switch};
  border-radius: ${props => props.theme.radii.big};

  @media (min-width: 768px) {
    align-items: center;
    padding-top: 40px;
  }
  @media (min-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .InvalidInput {
    border: 1px solid ${props => props.theme.colors.redError};
  }
  .ErrorMsg {
    color: green;
  }
`;

export const Avatar = styled.div`
    width: 72px;
  height: 72px;
  position: absolute;
  left: calc(50% - 36px);
  top: -36px;
  fill: rgba(62, 133, 243, 0.18);
  background-color: white;
  border: 2px solid #3e85f3;
  border-radius: ${props => props.theme.radii.round};
  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.radii.round};
  }
`

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;
