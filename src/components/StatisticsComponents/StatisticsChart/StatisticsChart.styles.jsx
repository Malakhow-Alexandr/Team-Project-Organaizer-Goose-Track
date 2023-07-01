import styled from 'styled-components';

export const CustomText = styled.text`
  fill: ${p => p.theme.colors.third_text_switch};
  @media screen and (max-width: 375px) {
    font-size: 12px;
    font-weight: 500;
  }
`;
export const TooltipStyled = styled.div`
  width: 120px;
  height: 100px;
  padding-top: 15px;
  padding-left: 5px;
  padding-right: 5px;

  background-color: ${p => p.theme.colors.statistics_tooltip_background};
  border-radius: 10px;
`;
export const TooltipTitle = styled.p`
  margin-bottom: 8px;
  color: ${p => p.theme.colors.statistics_tooltip_text};
  font-family: ${p => p.theme.fonts.text};
  font-size: 17px;
  font-weight: 600;
  text-align: center;
`;
export const TooltipText = styled.p`
  margin-bottom: 4px;
  color: ${p => p.theme.colors.statistics_tooltip_text};
  font-family: ${p => p.theme.fonts.text};
  font-size: 15px;
  font-weight: 500;
  @media screen and (max-width: 375px) {
    font-size: 12px;
    font-weight: 500;
  }
`;
