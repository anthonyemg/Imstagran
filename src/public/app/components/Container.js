import React from 'react';
import Slideshow from './Slideshow';
import superagent from 'superagent';
import UserInfo from './UserInfo';

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

        <div className='searchBar'>
          {/* <button onClick={this.handlePrevious}>previous</button> */}
          <div className='searchBar-title'>
            <i className='fa fa-instagram fa-2x' />
            <span>imstagran</span>
          </div>
          <input type='text' placeholder='Search' value={this.state.searchUsername} onChange={this.handleUserChange} onKeyPress={this.handleKeyPress}/>
          {/* <button onClick={this.handleNext}>next</button> */}
          <div className='searchBar-buttons'>
            <i className="fa fa-circle-thin fa-lg" />
            <i className="fa fa-heart-o fa-lg" />
            <i className="fa fa-user-o fa-lg" />
          </div>
        </div>

        <UserInfo
          windowHeight={this.state.windowHeight}
          currentUsername={this.state.currentUsername}
          currentFullName={this.state.currentFullName}
          currentUserImage={this.state.currentUserImage}
        />

        {/* <Slideshow
          widowWidth={this.state.windowWidth}
          windowHeight={this.state.windowHeight}
          feed={this.state.feed}
          currentImage={this.state.currentImage}
        /> */}

        {this.state.feed ?
          <div className="wrapper" style={{width:this.state.windowHeight}}>
            <img src={this.state.feed[0].images.standard_resolution.url} width='100%' height='100%'  className="one"/>
            <img src={this.state.feed[2].images.standard_resolution.url} width='100%' height='100%'  className="two"/>
            <img src={this.state.feed[3].images.standard_resolution.url} width='100%' height='100%'  className="three"/>
            <img src={this.state.feed[4].images.standard_resolution.url} width='100%' height='100%'  className="four"/>
            <img src={this.state.feed[5].images.standard_resolution.url} width='100%' height='100%'  className="five"/>
            <img src={this.state.feed[6].images.standard_resolution.url} width='100%' height='100%'  className="Six"/>
            <img src={this.state.feed[7].images.standard_resolution.url} width='100%' height='100%'  className="Seven"/>
            <img src={this.state.feed[8].images.standard_resolution.url} width='100%' height='100%'  className="Eignt"/>
            <img src={this.state.feed[9].images.standard_resolution.url} width='100%' height='100%'  className="Nine"/>
          </div> :
          <h1>please search</h1> }

      </div>
    )
  }
}

export default Container;
