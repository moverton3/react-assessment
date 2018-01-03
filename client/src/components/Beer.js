import React, { Component } from 'react';
import axios from 'axios';


class Beer extends Component {
state = { beers: [] }

componentWillMount() {
  axios.get('/api/all_beers?page=1&per_page=12')
  .then(res => {
    this.setState({ beers: res.data.entries })
    console.log(res)
  })
}

displayBeers = () => {
  return this.state.beers.map(beer => {
    return(<li key={beer.id}>{ beer.name } -- {beer.description}</li>)
  })
}

  render() {
    return(
      <ul>
        { this.displayBeers() }
      </ul>
    )
  }
}


export default Beer;
