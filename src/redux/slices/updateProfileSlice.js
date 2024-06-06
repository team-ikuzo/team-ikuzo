
import { supabase } from '@/supabase';
import { createSlice } from '@reduxjs/toolkit';


//초기 상태값
const initialState = {
    title: "테스트",
    introduction: "테스트",
    tags: ["테스트"],
    image: "test",
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
        updateImage: (state, action) => {
            state.image = [...action.payload]
        },
    }
})

export const {updateIntroduction, updateTags, updateTitle, updateImage} = updateProfileSlice.actions;
export default updateProfileSlice.reducer;