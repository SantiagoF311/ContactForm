import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;

  

  ul {
    list-style: none;
    padding-left: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;

    li {
      width: 250px;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 10px;
      margin: 10px;

      p {
        margin: 0;
      }

      button {
        padding: 8px;
        background-color: #d9534f;
        color: #fff;
        border: none;
        border-radius: 4px;
        margin-top: 5px;
        cursor: pointer;

        &:hover {
          background-color: #c9302c;
        }
      }
    }
  }

  h1 {
    color: #333;
  }

  h1, p {
    text-align: center;
  }
`;

export const Input = styled.input`
  border: none; 
  outline: none; 
  padding: 5px;
  border-radius: 10px;
  font-size: 14px;
`

export const InputLabel = styled.label`
  display: flex;
  gap: 5px;
  text-align: left;
`