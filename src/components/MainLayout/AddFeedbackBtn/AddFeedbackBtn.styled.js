import styled from 'styled-components';

export const AddFeedbackButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 32px;

  background: ${props => props.theme.colors.primary};
  border-radius: 10px;

  font-family: ${props => props.theme.fonts.heading};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 130px;
    height: 42px;
    font-size: 14px;
    line-height: 18px;
  }
`;
