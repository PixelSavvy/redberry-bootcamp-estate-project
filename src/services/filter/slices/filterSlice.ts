import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type TFilter } from '@/services/filter/schemas/filterSchema';
import { type TRootState } from '@/store';

type TFilterProps = TFilter;

const initialState: TFilterProps = {
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
    setRegions(state, action: PayloadAction<TFilterProps['regions']>) {
      state.regions = action.payload;
    },
    setPrice(state, action: PayloadAction<TFilterProps['price']>) {
      state.price = action.payload;
    },
    setArea(state, action: PayloadAction<TFilterProps['area']>) {
      state.area = action.payload;
    },
    setNumberOfRooms(
      state,
      action: PayloadAction<TFilterProps['numberOfRooms']>,
    ) {
      state.numberOfRooms = action.payload;
    },

    setFilter: (state, action: PayloadAction<Partial<TFilterProps>>) => {
      return {
        ...state,
        ...action.payload,
      };
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

    resetFilter() {
      return initialState;
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
  setFilter,
} = filterSlice.actions;

const selectFilter = (state: TRootState): TFilterProps => state.filter;

const filterReducer = filterSlice.reducer;

export {
  filterReducer,
  removeArea,
  removeNumberOfRooms,
  removePrice,
  removeRegion,
  resetFilter,
  selectFilter,
  setArea,
  setFilter,
  setNumberOfRooms,
  setPrice,
  setRegions,
};
