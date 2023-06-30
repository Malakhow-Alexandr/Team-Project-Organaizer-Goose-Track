import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Item = styled.li`
  width: 70px;
  height: 8px;
  background-color: ${({ state }) =>
    state === 'red' ? 'red' : state === 'strong' ? 'green' : 'lightgray'};

  &:first-child {
    background-color: ${({ state }) => state === 'easy' && 'red'};
  }

  &:nth-child(1) {
    background-color: ${({ state }) => state === 'medium' && 'orange'};
  }
  &:nth-child(2) {
    background-color: ${({ state }) => state === 'medium' && 'orange'};
  }
`;
