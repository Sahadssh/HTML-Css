  import React from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { setCountry } from "../redux/locationSlice";

  function CountryDropdown() {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.location.countries);
    const selectedCountryId = useSelector((state) => state.location.selectedCountryId);

    const handleChange = (e) => {
      const countryId = parseInt(e.target.value);
      dispatch(setCountry(countryId));
    };

    return (
      <div>
        <label>Select Country: </label>
        <select value={selectedCountryId || ""} onChange={handleChange}>
          <option value="" disabled>Select a country</option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  export default CountryDropdown;



