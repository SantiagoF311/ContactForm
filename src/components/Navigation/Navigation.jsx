import { useAuth } from '../../hooks';
import { StyledLink } from '../styles/StyledLink';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          Contacts  
        </StyledLink>
      )}
    </nav>
  );
};
