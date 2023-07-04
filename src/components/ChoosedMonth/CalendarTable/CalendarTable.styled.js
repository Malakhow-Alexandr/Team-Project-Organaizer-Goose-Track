import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: ${p => p.theme.radii.small};
  overflow: hidden;
  background-color: ${props => props.theme.colors.third_background_switch};
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
  height: 25px;
  width: 25px;
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
  min-width: 35px;
  min-height: 84px;
  padding: 1px;
  border-block-end: 1px solid rgba(220, 227, 229, 0.8);
  border-inline-end: 1px solid rgba(220, 227, 229, 0.8);
  &:nth-child(7n) {
    border-right: none;
  }
  cursor: ${props => (props.isSelectedMonth ? 'pointer' : 'auto')};
  transition: box-shadow 300ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px ${p => p.theme.colors.calendar_shadow_switch},
      0px 4px 4px ${p => p.theme.colors.calendar_shadow_switch},
      1px 4px 6px ${p => p.theme.colors.calendar_shadow_switch};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    min-width: 100px;
    min-height: 125px;
    padding: 4px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    min-width: 155px;
    padding: 8px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TaskListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style-position: inside;
  gap: 2px;
`;
export const CalendarTableMoreBtn = styled.button`
  border: none;
  border-radius: 8px;
  color: transparent;
  text-align: start;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  margin-top: 0;
  padding: 0;
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.white};
  }
  @media screen and (min-width: 1440px) {
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.white};
  }
`;
export const TaskItem = styled.button`
  border-radius: 8px;
  padding: 4px 4px 4px 8px;
  border: none;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: start;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding: 4px 10px 4px 12px;
  }
  @media screen and (min-width: 1440px) {
    padding: 4px 15px 4px 12px;
  }
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
