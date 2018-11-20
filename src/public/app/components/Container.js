import React from 'react';

import Grid from './Grid';
import MobileFooter from './MobileFooter';
import SearchBar from './SearchBar'
import UserInfo from './UserInfo';
import UserInfoMobile from './UserInfoMobile'

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      windowHeight: 0,
      windowWidth: 0,
    };
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  componentWillMount() {
    this.handleResize();
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.handleResize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  render() {
    const {
      feed,
      user,
    } = this.props;

    return (
      <div className='container'>
        <SearchBar />

        <UserInfo user={user} />

        <UserInfoMobile user={user} />

        <Grid
          feed={feed}
          windowWidth={this.state.windowWidth}
        />

        <MobileFooter />
      </div>
    )
  }
}

export default Container;
