import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type TFilter } from '@/services/filter';
import { type TRootState } from '@/store';

type TFilterProps = {
  filter: {
    region: TFilter['region'][];
    price: TFilter['price'];
    area: TFilter['area'];
    numberOfRooms: TFilter['numberOfRooms'];
  };
};

const initialState: TFilterProps = {
  filter: {
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
    setFilter(state, action: PayloadAction<TFilterProps>) {
      state.filter = {
        ...action.payload.filter,
      };
    },
  },
});

const { setFilter } = filterSlice.actions;
const selectFilter = (state: TRootState): TFilterProps['filter'] =>
  state.filter.filter;
const filterReducer = filterSlice.reducer;

export { filterReducer, selectFilter, setFilter };
