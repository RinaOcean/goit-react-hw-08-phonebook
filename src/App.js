import React, { Component, Suspense, lazy } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from './components/Container';
import AppBar from './components/AppBar';
// import MainPage from './pages/MainPage';
// import ContactsPage from './pages/ContactsPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import Spinner from 'react-bootstrap/Spinner';

import { fetchContacts } from './redux/contacts/contacts-operations';
import { getItems, getLoadingItems } from './redux/contacts/contacts-selectors';
import { getCurrentUser } from './redux/auth/auth-operations';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components//PublicRoute/PublicRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const HomePage = lazy(() =>
  import('./pages/MainPage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
    this.props.fetchItems();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/"
              component={RegisterPage}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  items: getItems(state),
  isLoading: getLoadingItems(state),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchContacts()),
  onGetCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
