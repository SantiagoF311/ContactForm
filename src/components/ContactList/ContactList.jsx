import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectAllContacts, selectLoading } from "../../redux/contacts/selectors";
import { Container } from "../styles/StyledContactsList";
import { Input, InputLabel } from "../styles/StyledContactsList";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => dispatch(deleteContact(id));

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <div>
        <InputLabel htmlFor="search">
          Search Contact:
          <Input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputLabel>
      </div>
      <ul>
        {isLoading && <h1>Loading...</h1>}
        {filteredContacts.length === 0 && <p>No hay contactos aún.</p>}
        {filteredContacts.map(({ name, email, phone, _id }) => (
          <li key={_id}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={() => handleDelete(_id)}>Delete contact</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};
