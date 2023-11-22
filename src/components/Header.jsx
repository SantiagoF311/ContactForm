import { useSelector } from "react-redux";
import { getContact } from "../redux/selectors";

export const Header = () => {
  const { items, isLoading, error } = useSelector(getContact);

  return (
    <header>
      <h1>Example</h1>
      <ul>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {items.map(({ name, number, id }) => (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
          </li>
        ))}
      </ul>
    </header>
  );
};
