import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        door: false,
        doorD: false,
        id : null,
        useImg: false,
    },
    reducers: {
        open: (state) => {
            state.door = true;
        },
        close: (state) => {
            state.door = false;
        },
        openD: (state) => {
            state.doorD = true;
        },
        closeD: (state) => {
            state.doorD = false;
        },
        setId: (state,action)=>{
            state.id=action.payload;
        },
        checkImg:(state,action)=>{
            state.useImg=action.payload;
        },
    }
});

export default modalSlice.reducer;
//modalSlice.reducers가 아니다. reducers=reducer+action일 뿐
export const {checkImg, open, close, openD, closeD,setId} = modalSlice.actions;