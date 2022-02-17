import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QueryState {
  query: string;
}

const initialState: QueryState = {
  query: '',
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    updateQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
  },
});

export const { updateQuery } = querySlice.actions;

export default querySlice.reducer;
