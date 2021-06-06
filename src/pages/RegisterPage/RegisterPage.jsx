import { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '..//..//redux/auth';

import '../LoginPage/LoginPage.scss';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSignup(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <section className="sectiion_log_reg">
        <div className="FormWrapper">
          <div className="TitleWrapper">
            <h1 className="Title">Registration</h1>
          </div>

          <form onSubmit={this.handleSubmit} className="Form">
            <label className="Label">
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

            <label className="Label">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label className="Label">
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

const mapDispatchtoProps = {
  onSignup: signup,
};

export default connect(null, mapDispatchtoProps)(RegisterPage);
