import React from 'react';

class Grid extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className='grid'>
        {this.props.feed ?
          <div className="grid-wrapper">
            {this.props.feed.map((img, idx) =>  (
              <img src={img.images.standard_resolution.url} width='100%' height='100%' key={idx} />
            ))}
          </div>
          : <h3>search a user ^</h3>
        }
      </div>
    )
  }
}

export default Grid;
