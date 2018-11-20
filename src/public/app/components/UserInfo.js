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
      <div className='user-info'>
        <div className='user-info-imageWrapper'>
          <img
            className='user-info-image'
            src={profile_picture}
          />
        </div>

        <div className='user-info-text'>
          <div className='user-info-text-username' >
            <span>{username}</span>
            <span>Follow</span>
          </div>

          <div className='user-info-textStats'>
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

          <div className='user-info-bio'>
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
