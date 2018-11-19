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
      <div className='userInfoMobile'>
        <div className='userInfoMobile-top'>
          <span className='userInfoMobile-fullName'>{full_name}</span>
          <span className='userInfoMobile-comment'>{bio}</span>
        </div>
        <div className='userInfoMobile-bottom'>
          <div className='userInfoMobile-bottomStats'>
            <span className='userInfoMobile-bottomStatsNumbers'>{counts.media}</span>
            <span className='userInfoMobile-bottomSubtext'>posts</span>
          </div>
          <div className='userInfoMobile-bottomStats'>
            <span className='userInfoMobile-bottomStatsNumbers'>{counts.followed_by}</span>
            <span className='userInfoMobile-bottomSubtext'>followers</span>
          </div>
          <div className='userInfoMobile-bottomStats'>
            <span className='userInfoMobile-bottomStatsNumbers'>{counts.follows}</span>
            <span className='userInfoMobile-bottomSubtext'>following</span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfoMobile;
