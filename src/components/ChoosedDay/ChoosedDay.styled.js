import styled from 'styled-components';

export const TasksColumnsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  width: 335px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    width: 704px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 1087px;
  }
`;
