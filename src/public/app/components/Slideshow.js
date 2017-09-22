import React from 'react';


class Slideshow extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="slideshow" style={{width: this.props.windowHeight * 0.7, height: this.props.windowHeight * 0.7}}>
      </div>
    )
  }

}

export default Slideshow;
