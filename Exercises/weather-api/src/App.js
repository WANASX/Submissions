import React, { Component } from "react";
import "./index.css";

import Search from "./Search/Search";
import Mainimg from "./Mainimg/mainimg";
import Iamgew from "./imgesq/imgall";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <Search />
        </header>

        <div id="srcImage">
          <Mainimg />
        </div>

        <div>
          <Iamgew />
        </div>
      </div>
    );
  }
}

export default App;
