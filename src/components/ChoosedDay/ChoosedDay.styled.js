import styled from 'styled-components';

export const TasksColumnsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  max-width: 335px;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    max-width: 704px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 1087px;
  }
`;
