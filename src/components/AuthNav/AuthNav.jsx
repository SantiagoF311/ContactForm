import { StyledLink } from '../styles/StyledLink';

export const AuthNav = () => {
  return (
    <nav>
      <StyledLink to="/register">
        Register
      </StyledLink>
      <StyledLink to="/login">
        Log In
      </StyledLink>
    </nav>
  );
};
