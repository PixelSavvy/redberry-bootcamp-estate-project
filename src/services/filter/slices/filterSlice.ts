import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type TFilter } from '@/services/filter/schemas/filterSchema';
import { type TRootState } from '@/store/store';

type TFilterProps = {
  regions: TFilter['regions'];
  price: TFilter['price'];
  area: TFilter['area'];
  numberOfRooms: TFilter['numberOfRooms'];
};

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
    setRegionsFilter(state, action: PayloadAction<TFilter['regions']>) {
      state.regions = action.payload;
    },
    setPriceFilter(state, action: PayloadAction<TFilter['price']>) {
      state.price = action.payload;
    },
    setAreaFilter(state, action: PayloadAction<TFilter['area']>) {
      state.area = action.payload;
    },
    setNumberOfRoomsFilter(
      state,
      action: PayloadAction<TFilter['numberOfRooms']>,
    ) {
      state.numberOfRooms = action.payload;
    },
    // Полное обновление фильтра, если нужно обновить все параметры сразу
    setFilter(_state, action: PayloadAction<TFilterProps>) {
      return { ...action.payload };
    },
  },
});

const {
  setFilter,
  setRegionsFilter,
  setPriceFilter,
  setAreaFilter,
  setNumberOfRoomsFilter,
} = filterSlice.actions;

const selectFilter = (state: TRootState): TFilterProps => state.filter;

const filterReducer = filterSlice.reducer;

export {
  filterReducer,
  selectFilter,
  setAreaFilter,
  setFilter,
  setNumberOfRoomsFilter,
  setPriceFilter,
  setRegionsFilter,
};
