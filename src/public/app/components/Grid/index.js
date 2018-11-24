import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  handleGrid(feed, windowWidth) {
    const imageSize = windowWidth < 990 ? '33vw' : '293px';

    return (
      feed.map((img, idx) => {
        const imageWidth = img.images.standard_resolution.width;
        const imageHeight = img.images.standard_resolution.height;
        const isWidthGreaterThanHeight = imageWidth > imageHeight;
        const width = isWidthGreaterThanHeight ? 'auto' : imageSize;
        const height = isWidthGreaterThanHeight ? imageSize: 'auto';

        return (
          <div
            className='grid-component'
            key ={idx}
            onClick={() => this.props.handleOpenCarousel(idx)}
          >
            <img
              src={img.images.standard_resolution.url}
              style={{ width: width, height: height }}
            /> 
            <div
              className='grid-component-hover'
            >
              <div className='grid-component-hover-content'> 
                <div>
                  <i className='fa fa-heart' />
                  <spam>{img.likes.count}</spam>
                </div>

                <div>
                  <i className="material-icons">chat_bubble</i>
                  <spam>{img.comments.count}</spam>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    const { feed, windowWidth } = this.props;

    return (
      <div className='grid'>

        {feed &&
        <div className="grid-wrapper">
          {this.handleGrid(feed.slice(0, 18), windowWidth)}
        </div>}

        <div className='grid-loadMoreWrapper'>
          <span className='grid-loadMore'>Load more</span>
        </div>

        <div className='footer-text'>
          <span>A demonstration of my css/html abilities</span>

          <div>
            <a href='http://www.greenheck.io/'>greenheck.io</a> 
            <a className='fa fa-github fa-lg' href='https://github.com/anthonyemg' />
            <a className='fa fa-linkedin fa-lg' href='https://www.linkedin.com/in/anthonygreenheck/' />
          </div>
        </div>
      </div>
    )
  }
}

Grid.propTypes = {
  feed: PropTypes.array,
  windowWidth: PropTypes.number,
}

Grid.defaultProps = {
  feed: [],
  windowWidth: 0,
}

export default Grid;
