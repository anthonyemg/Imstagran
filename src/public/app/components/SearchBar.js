import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleKeyPress,
      handleUserChange,
      searchUsername,
    } = this.props;

    return (
      <div className='searchBar-container'>

        <div className='searchBar'>

          <div className='searchBar-hamburger'>
            <i className='fa fa-bars fa-2x' />
          </div>

          <div className='searchBar-titleWrapper'>
            <div className='searchBar-title'>
              <i className='fa fa-instagram fa-2x' />
              <span>imstagran</span>
            </div>
          </div>

          <input
            onChange={handleUserChange}
            onKeyPress={handleKeyPress}
            placeholder='Search'
            type='text'
            value={searchUsername}
          />

          <div className='searchBar-buttons'>
            <button>Get the app</button>
            <div className='searchBar-buttonsSignUpLogIn'>
              <span>Sign up</span>
              <span style={{ color: 'rgb(199,199,199)', margin: '0px 7px' }}>|</span>
              <span>Log in</span>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  searchUsername: PropTypes.string,
  handleKeyPress: PropTypes.func,
  handleUserChange: PropTypes.func,
}

SearchBar.defaultProps = {
  searchUsername: '',
  handleKeyPress: () => {},
  handleUserChange: () => {},
}


export default SearchBar;
