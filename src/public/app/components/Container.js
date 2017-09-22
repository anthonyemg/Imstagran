import React from 'react';
import Slideshow from './Slideshow';
import SearchBar from './SearchBar';

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
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
    return (
      <div className='container'>
        <h1>slideshow</h1>
        <Slideshow
          widowWidth={this.state.windowWidth}
          windowHeight={this.state.windowHeight}
        />
        <SearchBar />
      </div>
    )
  }

}

export default Container;
