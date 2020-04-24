import React from "react";

// Redundant way to import components:

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

// Optimal way to import components:
import { Cards, Chart, CountryPicker } from "./components";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    )
  }
}

export default App;