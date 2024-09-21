import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type TRootState } from '@/store';

import { type TFilter } from '../schemas/filterSchema';

const initialState: TFilter = {
  regions: [],
  price: {
    min: 0,
    max: 0,
  },
  area: {
    min: 0,
    max: 0,
  },
  numberOfRooms: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setRegions(state, action: PayloadAction<TFilter['regions']>) {
      state.regions = [...action.payload];
    },
    setPrice(state, action: PayloadAction<TFilter['price']>) {
      state.price = {
        min: action.payload.min,
        max: action.payload.max,
      };
    },
    setArea(state, action: PayloadAction<TFilter['area']>) {
      state.area = {
        min: action.payload.min,
        max: action.payload.max,
      };
    },
    setNumberOfRooms(state, action: PayloadAction<TFilter['numberOfRooms']>) {
      state.numberOfRooms = action.payload;
    },

    removeRegion(state, action: PayloadAction<number>) {
      state.regions = state.regions.filter(
        (region) => region.id !== action.payload,
      );
    },

    removePrice(state) {
      state.price = initialState.price;
    },

    removeArea(state) {
      state.area = initialState.area;
    },

    removeNumberOfRooms(state) {
      state.numberOfRooms = initialState.numberOfRooms;
    },

    resetFilter(state) {
      state.regions = initialState.regions;
      state.price = initialState.price;
      state.area = initialState.area;
      state.numberOfRooms = initialState.numberOfRooms;
    },
  },
});

const {
  setRegions,
  setPrice,
  setArea,
  setNumberOfRooms,
  removeRegion,
  removePrice,
  removeArea,
  removeNumberOfRooms,
  resetFilter,
} = filterSlice.actions;

const selectFilter = (state: TRootState): TFilter => state.filter;
const selectRegions = (state: TRootState): TFilter['regions'] =>
  state.filter.regions;
const selectPrice = (state: TRootState): TFilter['price'] => state.filter.price;
const selectArea = (state: TRootState): TFilter['area'] => state.filter.area;
const selectNumberOfRooms = (state: TRootState): TFilter['numberOfRooms'] =>
  state.filter.numberOfRooms;

const filterReducer = filterSlice.reducer;

export {
  filterReducer,
  removeArea,
  removeNumberOfRooms,
  removePrice,
  removeRegion,
  resetFilter,
  selectArea,
  selectFilter,
  selectNumberOfRooms,
  selectPrice,
  selectRegions,
  setArea,
  setNumberOfRooms,
  setPrice,
  setRegions,
};
