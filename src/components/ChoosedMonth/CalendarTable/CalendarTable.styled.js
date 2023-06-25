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
  background-color: #3e85f3;
  border-radius: 8px;
  color: ${p => p.theme.colors.white};
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    padding: 4px 8px;
  }
`;
export const DayWrapper = styled.div`
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`;
export const CellWrapper = styled.div`
  width: 47px;
  height: 94px;
  cursor: ${props => (props.isSelectedMonth ? 'pointer' : 'auto')};
  padding: 2px;
  border-block-end: 1px solid rgba(220, 227, 229, 0.8);
  border-inline-end: 1px solid rgba(220, 227, 229, 0.8);
  &:nth-child(7n) {
    border-right: none;
  }
  color: ${props => (props.isSelectedMonth ? 'pointer' : 'transparent')};

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 144px;
    padding: 4px;
  }
  @media screen and (min-width: 1440px) {
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
