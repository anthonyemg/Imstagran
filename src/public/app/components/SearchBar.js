import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pictures: ['default'],
    }
  }

  render() {
    return (
      <div>
        <h3>searchBar</h3>
        <button>search</button>
        <span>{this.state.pictures}</span>
      </div>
    )
  }

}
export default SearchBar;
