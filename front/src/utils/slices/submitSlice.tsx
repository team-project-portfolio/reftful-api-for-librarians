import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
    name: "submit",
    initialState: {

        submitData: {
            title: "",
            author: "",
            country: "",
            gender: "",
            year: "",
            ISBN: "",
            price: 0,
            imageUrl: ""
        },
        changeChecked: 0,


    },
    reducers: {
        submitEtc: (state, action) => {
            state.submitData.title = action.payload.title;
            state.submitData.author = action.payload.author;
            state.submitData.country = action.payload.country;
            state.submitData.ISBN = action.payload.ISBN;
            state.submitData.price = action.payload.price;
            state.submitData.gender = action.payload.gender;
            state.submitData.year = action.payload.year;
            state.submitData.imageUrl = action.payload.imageUrl;
        },
        upCheck: (state) => {
            //데이터에 crud되면 체크한다.
            state.changeChecked += 1;
        }

    }
});

export default submitSlice.reducer;
//modalSlice.reducers가 아니다. reducers=reducer+action일 뿐
export const { submitEtc, upCheck } = submitSlice.actions;