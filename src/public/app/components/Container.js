import React from 'react';
import Slideshow from './Slideshow';
import superagent from 'superagent';

class Container extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      feed: null,
      username: '',
      currentImage: null,
      currentImageIndex: null,
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
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

  handleSubmission () {
    var url = 'https://www.instagram.com/' + this.state.username + '/media/';
    superagent.get(url).then((response) => {
      this.setState({
        feed: response.body.items,
        currentImage: response.body.items[0].images.standard_resolution.url,
        currentImageIndex: 0,
      })
    });
    console.log('feed updated', this.state.feed)
  }

  handleNext () {
    var nextIndex = this.state.currentImageIndex + 1;
    this.setState({
      currentImage: this.state.feed[nextIndex].images.standard_resolution.url,
      currentImageIndex: nextIndex,
    })
  }

  render () {
    return (
      <div className='container'>
        <h1>slideshow</h1>

        <Slideshow
          widowWidth={this.state.windowWidth}
          windowHeight={this.state.windowHeight}
          feed={this.state.feed}
          username={this.state.username}
          currentImage={this.state.currentImage}
        />

        <div className='searchBar-inputField'>
          <button>previous</button>
          <input type='text' placeholder='user' value={this.state.username} onChange={this.handleUserChange} />
          <button onClick={this.handleSubmission}>submit</button>
          <button onClick={this.handleNext}>next</button>
        </div>



      </div>
    )
  }

}

export default Container;
