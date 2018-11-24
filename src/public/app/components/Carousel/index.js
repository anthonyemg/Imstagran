import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleWrapperClick(e) {
    e.stopPropagation();
  }

  handleArrowClick(e) {
    if (e.key === 'ArrowLeft') {
      this.props.handleCarouselButtonClick(e, 'left');
    }
    if (e.key === 'ArrowRight') {
      this.props.handleCarouselButtonClick(e, 'right');
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleArrowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleArrowClick);
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
        <div className="carousel-wrapper">
          
          <div className="carousel-button">
            <i
              className="material-icons"
              onClick={(e) => handleCarouselButtonClick(e, 'left')}
            >
              {selectedPictureIndex !== 0 ? 'chevron_left' : ''}
            </i>
          </div>

          {/* desktop */}
          <div className="carousel-container carousel-container-desktop">
          
            <div className="carousel-image" onClick={(e) => this.handleWrapperClick(e)}>
              <img src={feed[selectedPictureIndex].images.standard_resolution.url} /> 
            </div>

            <div className="carousel-content" onClick={(e) => this.handleWrapperClick(e)}>
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

          </div>
          {/* desktop end */}

          {/* mobile */}
          <div className="carousel-container carousel-container-mobile">

            <div className="carousel-content" onClick={(e) => this.handleWrapperClick(e)}>
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

              <div className="carousel-image" onClick={(e) => this.handleWrapperClick(e)}>
                <img src={feed[selectedPictureIndex].images.standard_resolution.url} /> 
              </div>

              <div className="carousel-content-buttons">
                <div>
                  <i className='fa fa-heart-o' />
                  <i className="material-icons">chat_bubble_outline</i>
                  <i className="material-icons">share</i>
                </div>
                <i className="material-icons">bookmark_border</i>
              </div>

              <div className="carousel-content-caption">
                <span>{`${_.get(feed[selectedPictureIndex].caption, 'from.username', '')}`}</span>
                <span>{`${_.get(feed[selectedPictureIndex].caption, 'text', '')}`}</span>
              </div>

              <div className="carousel-content-date">
                <span>{this.monthNames[date.getMonth()].toUpperCase()}</span>
                <spam>{date.getDate()}</spam>
              </div>
            </div>

          </div>
          {/* mobile end */}

          <div className="carousel-button">
              <i
                className="material-icons"
                onClick={(e) => handleCarouselButtonClick(e, 'right')}
              >
                {selectedPictureIndex !== 17 ? 'chevron_right' : ''}
              </i>
            </div>

        </div>
      </div>
    )
  }
}

Carousel.propTypes = {
  feed: PropTypes.array,
  handleCarouselButtonClick: PropTypes.func,
  handleCloseCarousel: PropTypes.func,
  selectedPictureIndex: PropTypes.number,
  username: PropTypes.string,
  userProfilePicture: PropTypes.string,
};

Carousel.defaultProps = {
  feed: [],
  handleCarouselButtonClick: () => {},
  handleCloseCarousel: () => {},
  selectedPictureIndex: 0,
  username: '',
  userProfilePicture: '',
};

export default Carousel;
