import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
    name: "submit",
    initialState: {
        title: "",
        author: "",
        country: "",
        gender: "",
        year: "",
        ISBN: "",
        price: 0,
        imageUrl: ""
    },
    reducers: {
        submitGender: (state, action) => {
            state.gender = action.payload;
        },
        submitYear: (state, action) => {
            state.year = action.payload;
        },
        submitImageUrl: (state, action) => {
            state.imageUrl = action.payload;
        },
        submitEtc: (state, action) => {
            state.title = action.payload.title;
            state.author = action.payload.author;
            state.country = action.payload.country;
            state.ISBN = action.payload.ISBN;
            state.price = action.payload.price;
            state.gender=action.payload.gender;
            state.year=action.payload.year;
            state.imageUrl=action.payload.imageUrl;
        },

    }
});

export default submitSlice.reducer;
//modalSlice.reducers가 아니다. reducers=reducer+action일 뿐
export const { submitEtc, submitGender, submitYear, submitImageUrl } = submitSlice.actions;