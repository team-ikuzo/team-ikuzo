
import { supabase } from '@/supabase';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


//초기 상태값
const initialState = {
    title: "테스트",
    introduction: "테스트",
    tags: ["테스트"],
}

const updateProfileSlice = createSlice({
    name: "update",
    initialState: initialState,
    reducers: {
        updateTitle: (state, action) => {
            state.title = action.payload
        },
        updateIntroduction: (state, action) => {
            state.introduction = action.payload
        },
        updateTags: (state, action) => {
            state.tags = [...action.payload]
        },
    }
})

export const {updateIntroduction, updateTags, updateTitle} = updateProfileSlice.actions;
export default updateProfileSlice.reducer;