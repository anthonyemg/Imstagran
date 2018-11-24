import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

    this.handleResize = this.handleResize.bind(this);
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

  handleCarouselButtonClick(e, direction) {
    e.stopPropagation();
    const { selectedPictureIndex } = this.state;
    const index = direction === 'right' ?
      selectedPictureIndex + 1 :
      selectedPictureIndex - 1;

    if (index < 0 || index >= 18) {
      return;
    }

    this.setState({ selectedPictureIndex: index });
  }

  componentWillMount() {
    this.handleResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
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
          handleCarouselButtonClick={(e, direction) => this.handleCarouselButtonClick(e, direction)}
          handleCloseCarousel={() => this.handleCloseCarousel()}
          selectedPictureIndex={selectedPictureIndex}
          username={user.username}
          userProfilePicture={user.profile_picture}
        />}
      </div>
    )
  }
}

Container.propTypes = {
  feed: PropTypes.array,
  user: PropTypes.object,
};

Container.defaultProps = {
  feed: [],
  user: {},
};

export default Container;
