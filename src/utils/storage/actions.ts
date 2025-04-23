import { createAction } from "@reduxjs/toolkit";

export const getData = createAction("country/getData");

export const filterData = createAction("country/filterData");

export const addRegion = createAction("country/addRegion");

export const booleanoAdd = createAction("country/booleanoAdd");
