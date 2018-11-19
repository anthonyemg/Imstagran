import React, { Component } from 'react';
import Container from './Container';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: null,
      isLoading: true,
      user: null,
    };
  }

  componentWillMount() {
    const promises = [fetch('/media'), fetch('/userinfo')]

    Promise.all(promises)
      .then(res => Promise.all(res.map(res => res.json())))
      .then(res => {
        this.setState({
          feed: res[0].data,
          isLoading: false,
          user: res[1].data,
        })
      })
      .catch((err) => console.error('Promise.all error', err));
  }

  render() {
    const { 
      feed,
      isLoading,
      user,
    } = this.state;

    return (
      <div>
        {isLoading ?
          <Loading /> :
          <Container
            feed={feed}
            user={user}
          />
        }
      </div>
    )
  }
}

export default App;
