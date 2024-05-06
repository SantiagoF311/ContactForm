import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageContainer = styled.span`
  color: ${(props) => (props.type === 'success' ? 'green' : 'red')};
  margin-top: 30px;
`;

export const Form = styled.form`
width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 14px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;