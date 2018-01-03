import React, { Component } from 'react';
import axios from 'axios';


class Brewery extends Component {
state = { breweries: [] }

componentWillMount() {
  axios.get('/api/all_breweries?page=1&per_page=12')
  .then(res => {
    this.setState({ breweries: res.data.entries })
    console.log(res)
  })
}

displayBreweries = () => {
  return this.state.breweries.map(brewery => {
    return(<li key={brewery.id}>{ brewery.name } -- {brewery.description}</li>)
  })
}

  render() {
    return(
      <ul>
        { this.displayBreweries() }
      </ul>
    )
  }
}


export default Brewery;
