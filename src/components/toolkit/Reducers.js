import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    igrok: "",
    start: false,
    winner: false,
    playerOne: [],
    playerTwo: [],
    oyin: [
      [0, 1, 2, ""],
      [3, 4, 5, ""],
      [6, 7, 8, ""],
      [0, 3, 6, ""],
      [1, 4, 7, ""],
      [2, 5, 8, ""],
      [0, 4, 8, ""],
      [2, 4, 6, ""],
    ],
  },
  reducers: {
    playerAction: (state, { payload }) => {
      state[payload.arr] = [...state[payload.arr], payload.data];
    },
    nextStart: (state) => {
      state.start = !state.start;
    },
    winners: (state) => {
      state.winner = !state.winner;
    },
    winPlayer: (state, { payload }) => {
      state.igrok = payload;
    },
    reset: (state) => {
      state.igrok = "";
      state.start = false;
      state.winner = false;
      state.playerOne = [];
      state.playerTwo = [];
    },
  },
});

export const { playerAction, nextStart, winners, winPlayer, reset } =
  appSlice.actions;
export default appSlice.reducer;
