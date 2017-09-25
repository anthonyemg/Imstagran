import React from 'react';
import Slideshow from './Slideshow';
import superagent from 'superagent';

class Container extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      test: 'noChange',
      windowWidth: 0,
      windowHeight: 0,
      feed: null,
      username: '',
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
      username: e.target.value
    })
  }

  handleSubmit () {
    fetch('/retrieve/photos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: this.state.username}),
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        feed: data.items,
        currentImage: data.items[0].images.standard_resolution.url,
        currentImageIndex: 0,
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
          <button onClick={this.handlePrevious}>previous</button>
          <input type='text' placeholder='Search' value={this.state.username} onChange={this.handleUserChange} onKeyPress={this.handleKeyPress}/>
          <button onClick={this.handleNext}>next</button>
        </div>

        <Slideshow
          widowWidth={this.state.windowWidth}
          windowHeight={this.state.windowHeight}
          feed={this.state.feed}
          username={this.state.username}
          currentImage={this.state.currentImage}
        />

      </div>
    )
  }
}

export default Container;
