import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action) => {
      return action.payload; // це буде значення фільтра (пошукового запиту)
    },
    // setFilter(state, action) {
    //   state = action.payload;

    //   return state;
    // },
  },
});

// const filtersSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     setFilter(state, action) {
//       state = action.payload;

//       return state;
//     },
//   },
// });

export const { setFilter } = filterSlice.actions;
// export const getFilter = state => state.filter;
export const filterReducer = filterSlice.reducer;
