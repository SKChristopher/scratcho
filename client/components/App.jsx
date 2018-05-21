import React, { Component } from "react";
import axios from "axios";

import "./style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: -Infinity
    };
  }

  componentDidMount = () => {
    this.fetchCounter();
  };

  fetchCounter = () => {
    axios.get("getCounter").then(data => {
      this.setState({ counter: data.data });
    });
  };

  handleButtonClick = () => {
    axios.put("add").then(this.fetchCounter);
  };

  render() {
    return (
      <div id="app-container">
        <img
          class="background-image"
          src="https://i.pinimg.com/originals/38/e9/9f/38e99f0083d07f6ac1df75b6bbb0fbf2.jpg"
        />
        <div className="white-text" >Counter: {this.state.counter}</div>
        <br />
        <button className="fancy-button" onClick={this.handleButtonClick}>
          Counter++
        </button>
        <marquee scrollamount="10" direction="right" ><img src="https://media.giphy.com/media/yqMtk0TfjRa5W/giphy.gif" /></marquee>
      </div>
    );
  }
}

export default App;
