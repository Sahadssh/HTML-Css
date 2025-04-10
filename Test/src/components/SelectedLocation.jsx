import React from "react";
import { useSelector } from "react-redux";

function SelectedLocation() {
  const { countries, selectedCountryId, selectedStateId, selectedCityId } = useSelector(
    (state) => state.location
  );

  const selectedCountry = countries.find((c) => c.id === selectedCountryId);
  const selectedState = selectedCountry?.states.find((s) => s.id === selectedStateId);
  const selectedCity = selectedState?.cities.find((c) => c.id === selectedCityId);

  return (
    <div style={{ marginTop: "2rem", background: "#f4f4f4", padding: "1rem", borderRadius: "6px" }}>
      <h3>Selected Location:</h3>
      <p><strong>Country:</strong> {selectedCountry?.name || "None"}</p>
      <p><strong>State:</strong> {selectedState?.name || "None"}</p>
      <p><strong>City:</strong> {selectedCity?.name || "None"}</p>
    </div>
  );
}

export default SelectedLocation;
