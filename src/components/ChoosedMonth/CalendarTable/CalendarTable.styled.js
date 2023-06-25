import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border: 1px solid ${p => p.theme.colors.calendar_border_color_switch};
  border-radius: ${p => p.theme.radii.small};
  overflow: hidden;
  background-color: ${p => p.theme.colors.white};
`;

export const CurrentDay = styled.div`
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.small};
  color: ${p => p.theme.colors.white};
  margin-bottom: 3px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    padding: 4px 8px;
  }
`;
export const DayWrapper = styled.div`
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.body};

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.heading};
  }
`;
export const CellWrapper = styled.div`
  width: 47px;
  height: 94px;
  padding: 2px;
  border-block-end: 1px solid rgba(220, 227, 229, 0.8);
  border-inline-end: 1px solid rgba(220, 227, 229, 0.8);
  &:nth-child(7n) {
    border-right: none;
  }
  cursor: ${props => (props.isSelectedMonth ? 'pointer' : 'auto')};
  color: ${props => (props.isSelectedMonth ? '#343434' : 'transparent')};
  transition: box-shadow 300ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.16),
      1px 4px 6px rgba(0, 0, 0, 0.36);
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 100px;
    height: 144px;
    padding: 4px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 155px;
    height: 125px;
    padding: 8px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
