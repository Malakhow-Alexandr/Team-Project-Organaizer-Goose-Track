import styled from 'styled-components';
import { theme } from 'theme';
import { ReactComponent as Plus } from '../../../../icons/plus.svg';
export const TaskHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 18px 35px 18px;
`;

export const TaskHeaderBth = styled(Plus)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  stroke: ${theme.colors.primary_text_switch};
  transition: stroke 250ms linear;
  &:hover {
    stroke: ${theme.colors.primary};
  }
`;

export const TaskHeaderTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.primary_text_switch};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.heading};
`;
