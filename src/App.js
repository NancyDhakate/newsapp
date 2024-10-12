import React, { Component } from "react";
import Navbar from "./components/NavBar";

import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={20} />
      </div>
    );
  }
}
