import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../redux/locationSlice";

function CityDropdown() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.location.countries);
  const selectedCountryId = useSelector((state) => state.location.selectedCountryId);
  const selectedStateId = useSelector((state) => state.location.selectedStateId);
  const selectedCityId = useSelector((state) => state.location.selectedCityId);

  const selectedCountry = countries.find((c) => c.id === selectedCountryId);
  const selectedState = selectedCountry?.states.find((s) => s.id === selectedStateId);
  const cities = selectedState ? selectedState.cities : [];

  const handleChange = (e) => {
    const cityId = parseInt(e.target.value);
    dispatch(setCity(cityId));
  };

  return (
    <div>
      <label>Select City: </label>
      <select value={selectedCityId || ""} onChange={handleChange} disabled={!selectedStateId}>
        <option value="" disabled>Select a city</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CityDropdown;
