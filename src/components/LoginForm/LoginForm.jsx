import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useTry } from '../../hooks/useMessageErr';
import { Container, MessageContainer, Form, InputLabel, Input, Button } from '../styles/StyledUserForm';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { setResponse, message } = useTry();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
  const res = await dispatch(
    logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    })
      );
    setResponse(res.payload);
} catch (err) {
  console.error('Error during login:', err);
}
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <InputLabel>
          Email
          <Input type="email" name="email" />
        </InputLabel>
        <InputLabel>
          Password
          <Input type="password" name="password" />
        </InputLabel>
        <Button type="submit">Log In</Button>
      </Form>
      {message && <MessageContainer type={message.type}>{message.text}</MessageContainer>}
    </Container>
  );
};
