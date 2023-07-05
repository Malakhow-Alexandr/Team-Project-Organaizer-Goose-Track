import styled from 'styled-components';

export const TasksColumnsListWrapper = styled.div`
  display: flex;
  max-width: 335px;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: center;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    max-width: 704px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 1087px;
  }
`;
