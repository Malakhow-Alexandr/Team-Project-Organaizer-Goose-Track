import styled from 'styled-components';
import { FaRegThumbsUp } from 'react-icons/fa';

export const AddFeedbackButton = styled.a`
  display: none;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50px;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 42px;

    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const FeedbackTextSpan = styled.span`
  display: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    display: flex;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    text-decoration: none;
    font-family: ${props => props.theme.fonts.heading};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.medium};
  }
`;

export const FeedbackIcon = styled(FaRegThumbsUp)`
 display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  size: 16;

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    display: none;
  }
`;
