import React from 'react';


class Slideshow extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="slideshow" style={{width: this.props.windowHeight * 0.7, height: this.props.windowHeight * 0.7}}>
        {this.props.feed ?
          <img src={this.props.feed[0].images.standard_resolution.url} width={this.props.windowHeight * 0.7} height={this.props.windowHeight * 0.7} /> :
          <span>no image</span>
        }
      </div>
    )
  }

}

export default Slideshow;
