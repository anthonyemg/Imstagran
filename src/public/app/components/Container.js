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
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
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
        feed: response.body.items
      })
    });
    console.log('feed updated', this.state.feed)
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
        />
        <div className='searchBar-inputField'>
          <input type='text' placeholder='user' value={this.state.username} onChange={this.handleUserChange} />
          <button onClick={this.handleSubmission}>submit</button>
        </div>

      </div>
    )
  }

}

export default Container;
