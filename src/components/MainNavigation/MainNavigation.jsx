import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '..//..//redux/auth/auth-selectors';

const MainNavigation = ({ isAuthenticated }) => (
  <nav className="NavList">
    <NavLink exact to="/" className="NavLink" activeClassName="NavLink--active">
      Main
    </NavLink>

    {isAuthenticated && (
      <NavLink
        exact
        to="/contacts"
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(MainNavigation);
