import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type TFilter } from '@/schemas';

import { type TRootState } from '../store';

type TListingProps = {
  listing: {
    region: TFilter['region'][];
    price: TFilter['price'];
    area: TFilter['area'];
    numberOfRooms: TFilter['numberOfRooms'];
  };
};

const initialState: TListingProps = {
  listing: {
    region: [],
    price: {
      min: 0,
      max: 0,
    },
    area: {
      min: 0,
      max: 0,
    },
    numberOfRooms: {
      n: 0,
    },
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<TListingProps>) {
      state.listing = {
        ...action.payload.listing,
      };
    },
  },
});

const { setFilter } = filterSlice.actions;
const selectListing = (state: TRootState): TListingProps['listing'] =>
  state.filter.listing;
const filterReducer = filterSlice.reducer;

export { filterReducer, selectListing, setFilter };
