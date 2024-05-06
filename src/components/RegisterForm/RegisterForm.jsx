// RegisterForm.jsx
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Container, MessageContainer, Form, InputLabel, Input, Button } from '../styles/StyledUserForm';
import { useTry } from '../../hooks/useMessageErr';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { setResponse, message } = useTry();

  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;

  try {
    const res = await dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log('Register Response:', res);  // Agrega esta línea
    setResponse(res.payload);
  } catch (err) {
    console.error('Error during registration:', err);
    // Puedes manejar errores aquí según sea necesario
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <InputLabel>
          Username
          <Input type="text" name="name" />
        </InputLabel>
        <InputLabel>
          Email
          <Input type="email" name="email" />
        </InputLabel>
        <InputLabel>
          Password
          <Input type="password" name="password" />
        </InputLabel>
        <Button type="submit">Register</Button>
      </Form>
      {message && <MessageContainer type={message.type}>{message.text}</MessageContainer>}
    </Container>
  );
};
