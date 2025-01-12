import { createSlice } from "@reduxjs/toolkit";

const initialCardState = {showCard: false}

export const uiSlice = createSlice({ 
    name: 'card',
    initialState:  initialCardState,
    reducers: {
        visibleCard(state) {
            state.showCard = !state.showCard
        }
    }
})

export const uiReducer = uiSlice.reducer
export const uiActions = uiSlice.actions