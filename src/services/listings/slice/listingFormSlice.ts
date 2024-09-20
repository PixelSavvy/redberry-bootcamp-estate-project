import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type TListing } from '@/services/listings';
import { type TRootState } from '@/store';

type TListingFormState = TListing;

const initialState: TListingFormState = {
  region_id: '',
  city_id: '',
  agent_id: '',
  description: '',
  zip_code: '',
  price: '',
  area: '',
  bedrooms: '',
  image: {} as File,
  is_rental: '0',
  address: '',
};

const listingFormSlice = createSlice({
  name: 'listingForm',
  initialState,
  reducers: {
    setListingFormPayload: (
      state,
      action: PayloadAction<Partial<TListing>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetListingFormPayload: () => {
      return initialState;
    },
  },
});

const { setListingFormPayload, resetListingFormPayload } =
  listingFormSlice.actions;
const selectListingFormPayload = (state: TRootState): TListing =>
  state.listingFormPayload;
const listingFormReducer = listingFormSlice.reducer;

export {
  listingFormReducer,
  resetListingFormPayload,
  selectListingFormPayload,
  setListingFormPayload,
};
