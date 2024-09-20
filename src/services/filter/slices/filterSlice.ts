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
  numberOfRooms: {
    n: 0,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Partial<TFilterProps>>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const { setFilter } = filterSlice.actions;

const selectFilter = (state: TRootState): TFilterProps => state.filter;

const filterReducer = filterSlice.reducer;

export { filterReducer, selectFilter, setFilter };
