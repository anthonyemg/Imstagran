import React, { PureComponent } from 'react';

class UserInfoMobile extends PureComponent {
  render() {
    const {
      user: {
        bio,
        counts,
        full_name,
      },
    } = this.props;

    return (
      <div className='user-info-mobile'>
        <div className='user-info-mobile-top'>
          <span className='user-info-mobile-fullName'>{full_name}</span>
          <span className='user-info-mobile-comment'>{bio}</span>
        </div>

        <div className='user-info-mobile-bottom'>
          <div className='user-info-mobile-bottomStats'>
            <span className='user-info-mobile-bottomStatsNumbers'>{counts.media}</span>
            <span className='user-info-mobile-bottomSubtext'>posts</span>
          </div>

          <div className='user-info-mobile-bottomStats'>
            <span className='user-info-mobile-bottomStatsNumbers'>{counts.followed_by}</span>
            <span className='user-info-mobile-bottomSubtext'>followers</span>
          </div>

          <div className='user-info-mobile-bottomStats'>
            <span className='user-info-mobile-bottomStatsNumbers'>{counts.follows}</span>
            <span className='user-info-mobile-bottomSubtext'>following</span>
          </div>
        </div>

      </div>
    )
  }
}

export default UserInfoMobile;
