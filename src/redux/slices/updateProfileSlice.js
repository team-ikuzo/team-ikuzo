const { createSlice } = require("@reduxjs/toolkit")


//초기 상태값
const initialState = {
    id: 1,
    title: "",
    links: [],
    introduction: "",
    tags: [],
}

const updateProfileSlice = createSlice({
    name: "update",
    initialState: initialState,
    reducers: {
        updateTitle: (state, action) => {
            state.title = action.payload
        },
        updateLinks: (state, action) => {
            state.links = [...action.payload]
        },
        updateIntroduction: (state, action) => {
            state.introduction = action.payload
        },
        updateTags: (state, action) => {
            state.tags = [...action.payload]
        },
    }
})

export const {updateIntroduction, updateLinks, updateTags, updateTitle} = updateProfileSlice.actions;
export default updateProfileSlice.reducer;