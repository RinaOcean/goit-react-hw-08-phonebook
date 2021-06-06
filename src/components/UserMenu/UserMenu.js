import { connect } from 'react-redux';

import { getUserEmail, logout } from '..//..//redux/auth';

import defaultAvatar from '..//..//imgs/monster-icon.png';

import './UserMenu.scss';

const UserMenu = ({ avatar, email, onLogout }) => (
  <div className="UserMenu">
    <img className="AvatarImg" src={avatar} alt="" width="40" />
    <span className="User">{email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: getUserEmail(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
