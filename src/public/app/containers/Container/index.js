import React, { Component } from 'react';
import {
  Carousel,
  Grid,
  MobileFooter,
  SearchBar,
  UserInfo,
  UserInfoMobile,
} from '../../components';

class Container extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayCarousel: false,
      selectedPicture: null,
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

  handleOpenCarousel(idx) {
    this.setState({ displayCarousel: true, selectedPicture: idx });
  }

  handleCloseCarousel() {
    this.setState({ displayCarousel: false });
  }

  handleCarouselButtonClick(direction) {
    const { selectedPicture } = this.state;
    let idx = direction === 'right' ? selectedPicture + 1 : selectedPicture - 1; 

    if (idx < 0 || idx > this.props.feed ) {
      idx = selectedPicture;
    }

    this.setState({ selectedPicture: idx });
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
    const { displayCarousel, selectedPicture, windowWidth} = this.state;

    return (
      <div className='container'>
        <SearchBar />

        <UserInfo user={user} />

        <UserInfoMobile user={user} />

        <Grid
          feed={feed}
          handleOpenCarousel={(idx) => this.handleOpenCarousel(idx)}
          windowWidth={windowWidth}
        />

        <MobileFooter />

        {displayCarousel &&
        <Carousel
          feed={feed}
          handleCarouselButtonClick={(direction) => this.handleCarouselButtonClick(direction)}
          handleCloseCarousel={() => this.handleCloseCarousel()}
          selectedPicture={selectedPicture}
          username={user.username}
          userProfilePicture={user.profile_picture}
        />}
      </div>
    )
  }
}

export default Container;
