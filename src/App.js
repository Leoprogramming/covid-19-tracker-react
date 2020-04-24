import React from "react";

// Redundant way to import components:

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

// Optimal way to import components:
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;