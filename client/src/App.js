import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    tickets: []
  }

  getTickets = () => {
    return axios.get('/api/tickets', { headers: {'Content-Type': 'application/json'} } )
      .then((response) => {
        this.setState({
          tickets: response.data.data
        });
      });
  }

  render() {
    var propsObject = Object.assign({}, this.state, { getTickets: this.getTickets });
    return (
      <div className="App">
        { React.cloneElement(this.props.children, propsObject) }
      </div>
    );
  }
}

export default App;
