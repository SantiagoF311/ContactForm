import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contacts/operations"
import { Container } from "../styles/StyledContactsForm";
import { useTry } from "../../hooks/useMessageErr";
import { MessageContainer } from "../styles/StyledUserForm";

export const ContactForm = () => {
  const { setResponse, message } = useTry();
  const dispatch = useDispatch();

  const handdleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const response = await dispatch(
        addContact({
          email: form.elements.email.value,
          name: form.elements.name.value,
          phone: form.elements.phone.value,
        })
      );
      setResponse(response.payload);
    } catch (err) {
      console.error('Error during login:', err);
    }
  };

  return (
    <Container>
      <form onSubmit={handdleSubmit}>
        <input type="text" name="name" placeholder="nombre" />
        <input type="email" name="email" placeholder="correo electrónico" />
        <input type="tel" name="phone" placeholder="número" />
        <button type="submit">Agregar contacto</button>
      </form>

      {message && <MessageContainer type={message.type}>{message.text}</MessageContainer>}
    </Container>
  );
};


