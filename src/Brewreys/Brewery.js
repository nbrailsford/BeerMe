import React from "react";
import axios from "axios";
import StarRatting from "./StarRatting.js";
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
            <h3>{brewery.name}</h3>
            <p>{brewery.brewery_type}</p>
            <a href={brewery.website_url} target="blank" className="link">
              Web Site
            </a>
            <StarRatting />
          </div>
        ))}
      </div>
    );
  }
}
