import React, { Component } from 'react';
import _ from 'lodash';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
  }

  handleWrapperClick(e) {
    e.stopPropagation();
  }

  handleArrowClick(e) {
    e.key === 'ArrowLeft' && this.props.handleCarouselButtonClick('left');
    e.key === 'ArrowRight' && this.props.handleCarouselButtonClick('right');
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => this.handleArrowClick(e));
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => this.handleArrowClick(e));
  }

  render() {
    const {
      feed,
      handleCarouselButtonClick,
      handleCloseCarousel,
      selectedPictureIndex,
      username,
      userProfilePicture,
    } = this.props;

    const date = new Date(parseInt(feed[selectedPictureIndex].created_time) * 1000);

    return (
      <div
        className="carousel"
        onClick={() => handleCloseCarousel()}
      >
        <div className="carousel-wrapper" onClick={(e) => this.handleWrapperClick(e)}>
          
          <div className="carousel-button">
            <i
              className="material-icons"
              onClick={() => handleCarouselButtonClick('left')}
            >
              chevron_left
            </i>
          </div>

          <div className="carousel-image">
            <img src={feed[selectedPictureIndex].images.standard_resolution.url} /> 
          </div>

          <div className="carousel-content">
            <div className="carousel-content-user">
              <img src={userProfilePicture} />
              <div className="carousel-content-user-details">
                <div>
                  {`${username}`}
                  <span>Follow</span>
                </div>
                <div>{feed[selectedPictureIndex].location.name}</div>
              </div>
            </div>

            <div className="carousel-content-caption">
              <span>{`${_.get(feed[selectedPictureIndex].caption, 'from.username', '')}`}</span>
              <span>{`${_.get(feed[selectedPictureIndex].caption, 'text', '')}`}</span>
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

          <div className="carousel-button">
            <i
              className="material-icons"
              onClick={() => handleCarouselButtonClick('right')}
            >
              chevron_right
            </i>
          </div>

        </div>
      </div>
    )
  }
}

export default Carousel;
