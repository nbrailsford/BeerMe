import React from "react";
import axios from "axios";
import "./brewery.css";

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
      <div className="brewerys">
        {this.state.brewerys.map(brewery => (
          <div className="breweryContainer" key={brewery.id}>
            <h3>
              {brewery.name}, {brewery.brewery_type}
            </h3>
            <a href={brewery.website_url} target="blank">
              Web Site
            </a>
          </div>
        ))}
      </div>
    );
  }
}
