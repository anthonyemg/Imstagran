import React from 'react';
import superagent from 'superagent'

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pictures: ['default'],
    }
    this.test = this.test.bind(this);
  }

  test () {
    superagent
        .get('/test')
        // .query(null)
        // .set('Accept', 'aplication/json')
        .end((err, response) => {
           if(err) {
             response.json({
               confirmation: 'fail',
               messgage: err.message
             })
             return
           }
           console.log('RESPONSE: ' + JSON.stringify(response.body.data.items))
          //  this.props.feedFetched(response.body.data.items)
           this.setState({
             feed: response.body.data.items
           })
        })
  }

  render() {
    return (
      <div className="searchBar">
        <button onClick={this.test}>search</button>
        <span>{this.state.pictures}</span>
      </div>
    )
  }

}
export default SearchBar;
