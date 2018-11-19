import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class UserInfo extends PureComponent {
  render() {
    const {
      user: {
        bio,
        counts,
        username,
        full_name,
        profile_picture,
      },
    } = this.props;

    return (
      <div className='userInfo'>
        <div className='userInfo-imageWrapper'>
          <img
            className='userInfo-image'
            src={profile_picture}
          />
        </div>

        <div className='userInfo-text'>
          <div className='userInfo-textUsername' >
            <div>{username}</div>
            <span>Follow</span>
          </div>

          <div className='userinfo-textStats'>
            <div>
              <span>{counts.media}</span>
              <span>posts</span>
            </div>

            <div>
              <span>{counts.followed_by}</span>
              <span>followers</span>
            </div>

            <div>
              <span>{counts.follows}</span>
              <span>following</span>
            </div>
          </div>

          <div className='userinfo-name'>
            <span>{full_name}</span>
            <spam>{bio}</spam>
          </div>
        </div>
      </div>
    )
  }
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    bio: PropTypes.string,
    username: PropTypes.string,
    full_name: PropTypes.string,
    profile_picture: PropTypes.string,
  }),
}

UserInfo.defaultProps = {
  user: {},
}

export default UserInfo;
