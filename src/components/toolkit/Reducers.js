import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    igrok: "",
    start: false,
    winner: false,
    oyin: {
      top: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      center: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    },
    newArr: Array(9).fill(""),
    addArr: [],
    playerX: 0,
    playerO: 0,
  },
  reducers: {
    playerAction: (state, { payload }) => {
      state.newArr = payload;
      for (let key in state.oyin) {
        state.oyin[key].forEach((val) => {
          if (
            payload[val[0]] === "" ||
            payload[val[1]] === "" ||
            payload[val[2]] === ""
          ) {
            // Bir biriga teng bo'magan holati
          } else if (
            payload[val[0]] === payload[val[1]] &&
            payload[val[1]] === payload[val[2]]
          ) {
            if (payload[val[0]] === "X") {
              state.playerX += true;
            } else {
              state.playerO += true;
            }
            state.igrok = payload[val[0]];
            state.winner = true;
          } else {
            if (payload.filter((val) => val !== "").length === 9) {
              state.igrok = "Durrang";
              state.winner = true;
            }
          }
        });
      }
    },
    nextStart: (state) => {
      state.start = !state.start;
    },
    reset: (state) => {
      state.igrok = "";
      state.newArr = Array(9).fill("");
      state.start = false;
      state.winner = false;
    },
  },
});

export const { playerAction, nextStart, winners, winPlayer, reset } =
  appSlice.actions;
export default appSlice.reducer;
