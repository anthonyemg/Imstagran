import React from 'react';
import superagent from 'superagent'

class SearchBar extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      pictures: '' ,
      feed: [],
      username: ''
    }
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmission () {
    var url = 'https://www.instagram.com/' + this.state.username + '/media/';
    superagent.get(url).then((response) => {
      this.setState({
        feed: response.body.items
      })
    });
  }

  render () {

    return (
      <div className="searchBar">

        <div className='searchBar-inputField'>
          <input type='text' placeholder='user' value={this.state.username} onChange={this.handleUserChange} />
          <button onClick={this.handleSubmission}>submit</button>
        </div>

        <span>{this.state.username}</span>
        {this.state.feed.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img.images.standard_resolution.url} />
            </div>
          )
        })}

      </div>
    )
  }

}
export default SearchBar;
