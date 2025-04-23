import { createReducer } from "@reduxjs/toolkit";
import { addRegion, booleanoAdd, filterData, getData } from "./actions";

const AppState = {
  countries: [],
  searchCountry: [],
  booleano: "",
};

const appReducer = createReducer(AppState, (builder) => {
  builder
    .addCase(getData, (state, action) => {
      state.countries = action.payload || [];
    })
    .addCase(filterData, (state, action) => {
      const results = state.countries.filter((e: any) => {
        return `${e.name.common} `
          .toLowerCase()
          .startsWith(`${action.payload}`.toLowerCase());
      });

      state.searchCountry = results;
    })
    .addCase(addRegion, (state, action) => {
      const resultsRegion = state.countries.filter((e: any) => {
        return `${e.region}`
          .toLowerCase()
          .includes(`${action.payload}`.toLowerCase());
      });

      state.searchCountry = resultsRegion;
    })
    .addCase(booleanoAdd, (state, action) => {
      const variable = action.payload;

      state.booleano = variable || "";
    });
});

export default appReducer;
