import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
  }

  render() {
    const {
      feed,
      handleCloseCarousel,
      selectedPicture,
      username,
      userProfilePicture,
    } = this.props;

    const date = new Date(parseInt(feed[selectedPicture].created_time) * 1000);

    return (
      <div
        className="carousel"
        onClick={() => handleCloseCarousel()}
      >
        <div className="carousel-wrapper">
          <img src={feed[selectedPicture].images.standard_resolution.url} /> 

          <div className="carousel-content">
            <div className="carousel-content-user">
              <img src={userProfilePicture} />
              <div className="carousel-content-user-details">
                <div>
                  {`${username}`}
                  <span>Follow</span>
                </div>
                <div>{feed[selectedPicture].location.name}</div>
              </div>
            </div>

            <div className="carousel-content-caption">
              <span>{`${feed[selectedPicture].caption.from.username}`}</span>
              <spam>{feed[selectedPicture].caption.text}</spam>
            </div>

            <div className="carousel-content-buttons">
              <div>
                <i className='fa fa-heart-o' />
                <i className="material-icons">chat_bubble_outline</i>
                <i className="material-icons">share</i>
              </div>
              <i className="material-icons">bookmark_border</i>
            </div>

            <div className="carousel-content-date">
              <span>{this.monthNames[date.getMonth()].toUpperCase()}</span>
              <spam>{date.getDate()}</spam>
            </div>

            <div className="carousel-content-footer">
              <div>
                <span>Log in</span>
                <span> to like or comment.</span>
              </div>
              <i className="material-icons">more_horiz</i>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Carousel;
