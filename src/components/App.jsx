import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContact } from "../redux/operations";
import { Header } from "./Header";
import "../App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <Header />
    </>
  );
}
export default App;
