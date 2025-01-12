import { createSlice } from "@reduxjs/toolkit";

const initialCardState = { showCard: false, notification: null };

export const uiSlice = createSlice({
  name: "card",
  initialState: initialCardState,
  reducers: {
    visibleCard(state) {
      state.showCard = !state.showCard;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
