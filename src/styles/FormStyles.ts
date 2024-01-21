import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background: #007bff;
`;

export const HeaderText = styled.h2`
  text-align: center;
  margin: -3px;
  color: #fff;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#e60000")};
  color: #fff;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  outline: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : " #d60000")};
  }
`;
