import React from 'react';
import superagent from 'superagent';

import Slideshow from './Slideshow';
import SearchBar from './SearchBar'
import UserInfo from './UserInfo';
import UserInfoMobile from './UserInfoMobile'
import Grid from './Grid';
import MobileFooter from './MobileFooter';

class Container extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      test: 'noChange',
      windowWidth: 0,
      windowHeight: 0,
      feed: null,
      searchUsername: 'tonygreenheck',
      currentUsername: '',
      currentFullName: '',
      currentUserImage: '',
      currentImage: null,
      currentImageIndex: null,
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleAutoSlideshow = this.handleAutoSlideshow.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleResize () {
    this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
  }

  componentWillMount () {
    this.handleResize();
    this.handleSubmit();
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  handleUserChange (e) {
    this.setState({
      searchUsername: e.target.value
    })
  }

  handleSubmit () {
    fetch('/retrieve/photos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: this.state.searchUsername}),
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        feed: data.items,
        currentImage: data.items[0].images.standard_resolution.url,
        currentImageIndex: 0,
        currentUsername: data.items[0].user.username,
        currentFullName: data.items[0].user.full_name,
        currentUserImage: data.items[0].user.profile_picture,
      })
    })
    .catch(err => console.log(err));
  }

  handleNext () {
    if (this.state.currentImageIndex + 1 !== this.state.feed.length) {
      var nextIndex = this.state.currentImageIndex + 1;
      this.setState({
        currentImage: this.state.feed[nextIndex].images.standard_resolution.url,
        currentImageIndex: nextIndex,
      })
    } else {
      console.log('sorry')
    }
  }

  handlePrevious () {
    if (this.state.currentImageIndex - 1 !== -1) {
      var previousIndex = this.state.currentImageIndex - 1;
      this.setState({
        currentImage: this.state.feed[previousIndex].images.standard_resolution.url,
        currentImageIndex: previousIndex,
      })
    } else {
      console.log('sorry')
    }
  }

  handleAutoSlideshow () {
    console.log('auto!')
    // console.log('auto length', this.state.feed.length)
    // while(this.state.currentImageIndex + 1 !== this.state.feed.length) {
    //   this.setTimeout(this.handleNext, 500);
    // }
  }

  handleKeyPress (e) {
    if (e.charCode == 13) {
      this.handleSubmit();
    }
  }

  render () {
    return (
      <div className='container'>

        <SearchBar
          searchUsername={this.state.searchUsername}
          handleUserChange={this.handleUserChange}
          handleKeyPress={this.handleKeyPress}
        />

        <UserInfo
          windowHeight={this.state.windowHeight}
          currentUsername={this.state.currentUsername}
          currentFullName={this.state.currentFullName}
          currentUserImage={this.state.currentUserImage}
        />

        <UserInfoMobile
          currentFullName={this.state.currentFullName}
          windowWidth={this.state.windowWidth}
        />

        <Grid
          windowWidth={this.state.windowWidth}
          feed={this.state.feed}
        />

        <MobileFooter />

        {/* <Slideshow
          widowWidth={this.state.windowWidth}
          windowHeight={this.state.windowHeight}
          feed={this.state.feed}
          currentImage={this.state.currentImage}
        /> */}
        {/* <button onClick={this.handleNext}>next</button> */}
        {/* <button onClick={this.handlePrevious}>previous</button> */}

      </div>
    )
  }
}

export default Container;
