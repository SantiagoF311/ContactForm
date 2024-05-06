import PropTypes from 'prop-types';
import { useAuth } from '../hooks/index';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};
