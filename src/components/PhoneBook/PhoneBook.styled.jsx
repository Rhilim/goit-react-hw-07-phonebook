import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledTitle = styled.h1`
  margin-left: 10px;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  width: 250px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  ::placeholder{
    color: grey;
    font-size: 1.2em;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px;
  width: 120px;
  background-color: #1e90ff;
  color: aquamarine;
  border: solid 1px aquamarine;
  border-radius: 4px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const StyledBtnReset = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px;
  width: 120px;
  background-color: #1e90ff;
  color: aquamarine;
  border: solid 1px aquamarine;
  border-radius: 4px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
`;

export const StyledLabel = styled.label`
  font-size: 1.2em;
  font-weight: bold;
`;
