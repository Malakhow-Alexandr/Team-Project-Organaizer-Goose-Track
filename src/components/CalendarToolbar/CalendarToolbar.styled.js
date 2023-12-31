import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${p => p.theme.breakpoints.table}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
