import React from "react";
import axios from "axios";

export default class Location extends React.Component {
  state = { location: [] };

  componentDidMount() {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyCg-q5HiBjXZEcLrebOwgsbj09dnR860dY"
      )
      .then(res => this.setState({ location: res }));
    console.log(this.state.location);
  }
  render() {
    return (
      <div className="location">
        <p>Locatoins</p>
      </div>
    );
  }
}
