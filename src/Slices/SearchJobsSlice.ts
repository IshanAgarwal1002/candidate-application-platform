import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { SearchJobsData } from '../Shared/Types';

const initialState: SearchJobsData = {
  jdList: [],
  totalCount: 0,
};

export const searchJobsSlice = createSlice({
  name: 'searchJobsData',
  initialState,
  reducers: {
    addJobs: (state, action: PayloadAction<SearchJobsData>) => {
      state = {
        totalCount: action.payload.totalCount,
        jdList: [...state.jdList, ...action.payload.jdList],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const searchJobsActions = searchJobsSlice.actions;

export const searchJobsReducer =  searchJobsSlice.reducer;
