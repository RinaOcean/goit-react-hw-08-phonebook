import { NavLink } from 'react-router-dom';

const AuthNavigation = () => (
  <nav className="NavList">
    <NavLink
      exact
      to="/login"
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Login
    </NavLink>

    <NavLink
      exact
      to="/register"
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Register
    </NavLink>
  </nav>
);

export default AuthNavigation;
