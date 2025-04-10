import React from "react";
import CountryDropdown from "./components/Country";
import StateDropdown from "./components/State";
import CityDropdown from "./components/City";
import SelectedLocation from "./components/SelectedLocation";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2> Location Selector</h2>
      <CountryDropdown />
      <br />
      <StateDropdown />
      <br />
      <CityDropdown />
      <SelectedLocation />
    </div>
  );
}

export default App;
