import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../userMenu/userMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks";
import { Container } from "../styles/StyledAppBar";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};
