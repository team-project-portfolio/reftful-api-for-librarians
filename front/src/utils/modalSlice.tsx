import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        door: false,
    },
    reducers: {
        open: (state) => {
            state.door = true;
        },
        close: (state) => {
            state.door = false;
        }
    }
});

export default modalSlice.reducer;
//modalSlice.reducers가 아니다. reducers=reducer+action일 뿐
export const {open, close} = modalSlice.actions;