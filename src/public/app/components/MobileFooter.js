import React, { PureComponent } from 'react';

class MobileFooter extends PureComponent {
  render() {
    return (
      <div className='mobile-footer'>

        <div className='mobile-footer-title'>
          <span>imstagran</span>
        </div>

        <div className='mobile-footer-buttons'>
          <div className='mobile-footer-buttonsSignUpLogIn'>
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
