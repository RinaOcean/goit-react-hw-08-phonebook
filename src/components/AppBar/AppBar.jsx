import { connect } from 'react-redux';

import MainNavigation from '../MainNavigation';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu/UserMenu';

import { getIsAuthenticated } from '../../redux/auth';

import './AppBar.scss';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className="Header">
      <MainNavigation />

      {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
