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
            {this.props.feed.map((img, idx) =>  (

              <div className = 'grid-componentContainer' key = {idx}>
                <img
                  className = 'grid-component'
                  src = {img.images.standard_resolution.url}
                  width = {img.images.standard_resolution.width > img.images.standard_resolution.height ? 'auto' : '100%'}
                  height = {img.images.standard_resolution.height > img.images.standard_resolution.width ? 'auto' : '100%'}
                />
              </div>

            ))}
          </div>
          : <h3>search a user ^</h3>
        }
      </div>
    )
  }
}

export default Grid;
