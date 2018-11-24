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
      selectedPictureIndex: null,
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
    this.setState({ displayCarousel: true, selectedPictureIndex: idx });
  }

  handleCloseCarousel() {
    this.setState({ displayCarousel: false });
  }

  handleCarouselButtonClick(direction) {
    const { selectedPictureIndex } = this.state;
    let idx = direction === 'right' ? selectedPictureIndex + 1 : selectedPictureIndex - 1; 

    if (idx < 0 || idx >= 18 ) {
      idx = selectedPictureIndex;
    }

    this.setState({ selectedPictureIndex: idx });
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
    const { displayCarousel, selectedPictureIndex, windowWidth} = this.state;

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
          selectedPictureIndex={selectedPictureIndex}
          username={user.username}
          userProfilePicture={user.profile_picture}
        />}
      </div>
    )
  }
}

export default Container;
