import { createSlice } from "@reduxjs/toolkit";
import countryStateCity from "../Data/CountryStateCity";
import { saveToLocalStorage } from "../LocalStorage";


const initialState = {
  countries: countryStateCity,
  selectedCountryId: null,
  selectedStateId: null,
  selectedCityId: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.selectedCountryId = action.payload;
      state.selectedStateId = null;
      state.selectedCityId = null;
      
      saveToLocalStorage("selectedCountryId", action.payload);
      localStorage.removeItem("selectedStateId");
      localStorage.removeItem("selectedCityId");
    },

    setState: (state, action) => {
      state.selectedStateId = action.payload;
      state.selectedCityId = null;
      saveToLocalStorage("selectedStateId", action.payload);
      localStorage.removeItem("selectedCityId");
    },

    setCity: (state, action) => {
      state.selectedCityId = action.payload;
      saveToLocalStorage("selectedCityId", action.payload);
    },
  },
});

export const { setCountry, setState, setCity } = locationSlice.actions;
export default locationSlice.reducer;