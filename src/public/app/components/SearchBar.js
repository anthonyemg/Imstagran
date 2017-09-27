import React from 'react';

class SearchBar extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='searchBar'>
        <div className='searchBar-title'>
          <i className='fa fa-instagram fa-2x' />
          <span>imstagran</span>
        </div>
        <input
          type='text'
          placeholder='Search'
          value={this.props.searchUsername}
          onChange={this.props.handleUserChange}
          onKeyPress={this.props.handleKeyPress}
        />
        <div className='searchBar-buttons'>
          {/* <i className="fa fa-circle-thin fa-lg" />
          <i className="fa fa-heart-o fa-lg" />
          <i className="fa fa-user-o fa-lg" /> */}
          <button>Get the app</button>
          <span>Sign up | Log in </span>
        </div>
      </div>
    )
  }
}

export default SearchBar;
