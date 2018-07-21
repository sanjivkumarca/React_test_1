import React, { Component } from "react";
import { render } from "react-dom";
//import logo from "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
import "./App.css";
import Map from "./Map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLatLng: {
        lat: 1.3526,
        lng: 103.8352
      },
      isMarkerShown: false
    };
  }

  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
        this.setState(prevState => ({
          currentLatLng: {
            ...prevState.currentLatLng,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          isMarkerShown: true
        }));
      });
    } else {
      error => console.log(error);
      window.alert("Current location not available..Use Default");
    }
  };

  componentDidMount() {
    this.showCurrentLocation();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Restaurants Nearby App</h1>
        </header>
        <Map
          isMarkerShown={this.state.isMarkerShown}
          currentLocation={this.state.currentLatLng}
        />
      </div>
    );
  }
}

export default App;
//render(<App />, document.getElementById("root"));
