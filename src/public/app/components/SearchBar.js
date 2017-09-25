import React from 'react';
import superagent from 'superagent'

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pictures: '' ,
      movies: 'test',
      feed: []
    }
    this.test = this.test.bind(this);
  }

  // test () {
  //   superagent
  //       .get('/test')
  //       // .query(null)
  //       // .set('Accept', 'aplication/json')
  //       .end((err, response) => {
  //          if(err) {
  //            response.json({
  //              confirmation: 'fail',
  //              messgage: err.message
  //            })
  //            return
  //          }
  //          console.log('RESPONSE: ' + JSON.stringify(response.body.data.items))
  //         //  this.props.feedFetched(response.body.data.items)
  //          this.setState({
  //            feed: response.body.data.items
  //          })
  //       })
  // }

test() {
    var url = 'https://www.instagram.com/tonygreenheck/media/';
    superagent.get(url).then((response) => {
      this.setState({
        feed: response.body.items
      })
      console.log('woot', this.state.feed);
    });
  }

  render() {

    return (
      <div className="searchBar">
        <button onClick={this.test}>search</button>
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
