import React, { PureComponent } from 'react';

class SearchBar extends PureComponent {
  render() {
    const title = "Currently disabled due to API changes..";

    return (
      <div className='search-bar-container'>
        <div className='search-bar'>

          <div className='search-bar-title'>
            <a className='fa fa-instagram fa-2x' href='https://github.com/anthonyemg/Imstagran' />
            <div className='search-bar-separator'/>
            <a href='https://github.com/anthonyemg/Imstagran'>Imstagran</a>
          </div>

          <div className='search-bar-input' title={title}>
            <i className='fa fa-search' />
            <span>Search</span>
          </div>

          <div className='search-bar-buttons'>
            <button title={title}>Log In</button>
            <span title={title}>Sign Up</span>
          </div>

        </div>
      </div>
    )
  }
}

export default SearchBar;
