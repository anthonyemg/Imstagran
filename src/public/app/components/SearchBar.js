import React from 'react';

class SearchBar extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='searchBar-container'>
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
            <button>Get the app</button>
            <div className='searchBar-buttonsSignUpLogIn'>
              <span>Sign up</span>
              <span style={{color: 'rgb(199,199,199)', margin: '0px 7px'}}>|</span>
              <span>Log in</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;
