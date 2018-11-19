import React, { PureComponent } from 'react';

class MobileFooter extends PureComponent {
  render() {
    return (
      <div className='mobileFooter'>

        <div className='mobileFooter-title'>
          <span>imstagran</span>
        </div>

        <div className='mobileFooter-buttons'>
          <div className='mobileFooter-buttonsSignUpLogIn'>
            <span>Sign up</span>
            <span style={{color: 'rgb(199,199,199)', margin: '0px 7px'}}>|</span>
            <span>Log in</span>
          </div>
        </div>

      </div>
    )
  }
}

export default MobileFooter;
