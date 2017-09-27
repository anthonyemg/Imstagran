import React from 'react';

class UserInfo extends React.Component {

  constructor (props) {
    super (props)
  }

  render() {

    if(this.props.currentUsername) {
      return (
        <div className='userInfo'>
          <div className='userInfo-imageWrapper'>
            <img src={this.props.currentUserImage} className='userInfo-image' />
          </div>
          <div className='userInfo-text'>
            <div className='userInfo-textUsername' >
              <div className='userInfo-username'>{this.props.currentUsername}</div>
              <button>Follow</button>
              {/* <i className="fa fa-cog fa-2x" /> */}
            </div>
            <div className='userinfo-textStats'>
              <div>
                <span className='userinfo-textStatsNumbers'>196</span>
                <span className='userinfo-textStatsNumbersSubtext'>posts</span>
              </div>
              <div>
                <span className='userinfo-textStatsNumbers'>263</span>
                <span className='userinfo-textStatsNumbersSubtext'>followers</span>
              </div>
              <div>
                <span className='userinfo-textStatsNumbers'>332</span>
                <span className='userinfo-textStatsNumbersSubtext'>following</span>
              </div>
            </div>
            <div className='userinfo-name'>
              <span className='userinfo-textStatsNumbers'>{this.props.currentFullName}</span>
              <span className='userinfo-textStatsNumbersSubtext'>hipster comments..</span>
            </div>
          </div>
        </div>
      )

    } else {
      return (
        <div>
        </div>
      )
    }

  }

}

export default UserInfo;
