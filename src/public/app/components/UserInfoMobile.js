import React from 'react';

class UserInfoMobile extends React.Component {

  constructor(props) {
    super (props)
  }

  render () {
    return (
      <div className = 'userInfoMobile' style={{display: this.props.currentFullName && this.props.windowWidth < 735 ? 'block ' : 'none'}}>
        <div className = 'userInfoMobile-top'>
          <span className ='userInfoMobile-fullName'>{this.props.currentFullName}</span>
          <span className ='userInfoMobile-comment'>hipster comments..</span>
        </div>
        <div className = 'userInfoMobile-bottom'>
          <div className = 'userInfoMobile-bottomStats'>
            <span className='userInfoMobile-bottomStatsNumbers'>196</span>
            <span className='userInfoMobile-bottomSubtext'>posts</span>
          </div>
          <div className = 'userInfoMobile-bottomStats'>
            <span className='userInfoMobile-bottomStatsNumbers'>263</span>
            <span className='userInfoMobile-bottomSubtext'>followers</span>
          </div>
          <div className = 'userInfoMobile-bottomStats'>
            <span className='userInfoMobile-bottomStatsNumbers'>332</span>
            <span className='userInfoMobile-bottomSubtext'>following</span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfoMobile;
