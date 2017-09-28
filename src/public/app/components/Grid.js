import React from 'react';

class Grid extends React.Component {

  constructor  (props) {
    super (props)
  }

  render () {
    return (
      <div className = 'grid'>
        {this.props.feed ?
          <div className = "grid-wrapper">
            {this.props.feed.slice(0, 18).map((img, idx) =>  (
              <div className = 'grid-component' key = {idx}>
                <img
                  src = {img.images.standard_resolution.url}
                  style = {
                    this.props.windowWidth < 990 ?
                      {
                        width: img.images.standard_resolution.width > img.images.standard_resolution.height ? 'auto' : '33vw',
                        height: img.images.standard_resolution.height > img.images.standard_resolution.width ? 'auto' : '33vw'
                      }
                      :
                      {
                        width: img.images.standard_resolution.width > img.images.standard_resolution.height ? 'auto' : '293px',
                        height: img.images.standard_resolution.height > img.images.standard_resolution.width ? 'auto' : '293px'
                      }
                    }
                />
              </div>
            ))}
          </div>
          : <div></div>
        }

        <div className='grid-loadMoreWrapper'>
          <span className='grid-loadMore'>
            Load more
          </span>
        </div>
        <div className='footer-text'>
          <span>this was simply made to demonstrate my css/html abilities</span>
          <div>
            <a href='http://www.greenheck.io/'>
              <span>greenheck.io</span>
            </a>
            <a href='https://github.com/anthonyemg'>
              <i className='fa fa-github fa-lg' />
            </a>
            <a href='https://www.linkedin.com/in/anthonygreenheck/'>
              <i className='fa fa-linkedin fa-lg' />
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default Grid;
