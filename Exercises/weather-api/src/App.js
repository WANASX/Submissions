import React, { Component } from "react";
import "./index.css";

import Search from "./Search/Search";
import Mainimg from "./Mainimg/mainimg";
import Iamgew from "./imgesq/imgall";
import FakeWeather from "./JSON/FakeWeather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      isLoaded: false,
      response: null,
      searchInput: "Beirut"
    };
  }

  async componentDidMount() {
    const apiKey = "b18a89106e557a31be3e28dae4347f02";
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchInput}&cnt=8&units=metric&appid=${apiKey}`
    );
    const r = await response.json();
    console.log(r);
    this.setState({ response: r, isLoaded: true });
  }

  callbackFunction = childData => {
    this.setState({ city: childData });
    this.ApiCaller(childData);
  };

  render() {
    {
      return (
        <>
          <div>
            <header>
              <Search parentCallback={this.callbackFunction} />
            </header>
            {this.state.response !== null ? (
              <div id="srcImage">
                <Mainimg
                  humidity={this.state.response.list[0].main.humidity}
                  pressure={FakeWeather.list[0].main.pressure}
                />
              </div>
            ) : (
              "loading"
            )}
            {this.state.response !== null
              ? console.log("gcgf", this.state.response)
              : "hgh"}
            {console.log("khjkh", this.state.response)}

            <div className="weatherImages">
              {FakeWeather.list.map((item, value) => {
                if (value > 1 && value < 8)
                  return <Iamgew props={FakeWeather.list[0].weather.id} />;
              })}
            </div>
          </div>
        </>
      );
    }
  }
}

export default App;
