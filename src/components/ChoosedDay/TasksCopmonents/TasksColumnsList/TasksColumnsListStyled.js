import styled from 'styled-components';

export const TaskContainer = styled.ul`
  /* display: flex; */
  width: 100%;
  margin: 0 auto;
  /* height: calc(100vh - 80px); */
  list-style: none;
  padding: 0;
  justify-content: center;
  align-content: space-between;
  overflow-x: scroll;
  @media screen and (min-width: 1440px) {
    justify-content: center;
    align-items: flex-start;
    overflow-x: hidden;
  }
`;

export const StretchContainer = styled.div`
  display: flex;
  align-self: baseline;
  align-content: space-between;

  @media screen and (min-width: 1440px) {
    justify-content: center;
  }
`;
