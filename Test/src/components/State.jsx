import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setState } from "../redux/locationSlice";

function StateDropdown() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.location.countries);
  const selectedCountryId = useSelector((state) => state.location.selectedCountryId);
  const selectedStateId = useSelector((state) => state.location.selectedStateId);

  const selectedCountry = countries.find(c => c.id === selectedCountryId);
  const states = selectedCountry ? selectedCountry.states : [];

  const handleChange = (e) => {
    const stateId = parseInt(e.target.value);
    dispatch(setState(stateId));
  };

  return (
    <div>
      <label>Select State: </label>
      <select value={selectedStateId || ""} onChange={handleChange} disabled={!selectedCountryId}>
        <option value="" disabled>Select a state</option>
        {states.map((state) => (
          <option key={state.id} value={state.id}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StateDropdown;
