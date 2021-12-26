import { createSlice } from '@reduxjs/toolkit'

const initialState = { results: [] }

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    receiveResults(state,action) {
      debugger
      state.results = [...action.payload]
    }
  }
})

export const { receiveResults } = searchSlice.actions

export default searchSlice.reducer