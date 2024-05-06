import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
      padding: 8px;
    }

    button {
      padding: 10px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #45a049;
      }
    }
  }

  p {
    color: #ff0000;
  }
`;