import React from "react";
import axios from "axios";

export default class Brewerys extends React.Component {
  state = {
    brewerys: []
  };

  componentDidMount() {
    axios
      .get("https:api.openbrewerydb.org/breweries?by_state=Colorado")
      .then(res => {
        console.log(res);
        this.setState({ brewerys: res.data });
      });
  }
  render() {
    return (
      <ul>
        {this.state.brewerys.map((brewery, id) => (
          <li key={brewery.id}>
            {brewery.name}, {brewery.brewery_type}
          </li>
        ))}
      </ul>
    );
  }
}
