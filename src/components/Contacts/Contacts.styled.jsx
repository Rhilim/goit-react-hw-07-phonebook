import styled from '@emotion/styled';

export const StyledList = styled.ul`
  align-items: flex-end;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledListItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const StyledDeleteBtn = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px;
  width: 50px;
  background-color: #1e90ff;
  color: aquamarine;
  border: solid 1px aquamarine;
  border-radius: 4px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
