import { createSlice } from "@reduxjs/toolkit";

const createPostSlice = createSlice({
  name: "createPostSlice",
  initialState: {
    title: "",
    body: "",
    name: "김민수",
    job: "프론트엔드 개발자",
    hashtags: [],
    likesCount: 0,
    commentsCount: 2,
    notices: "",
    image: null,
  },

  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },

    setBody: (state, action) => {
      state.body = action.payload;
    },

    setName: (state, action) => {
      state.name = action.payload;
    },

    setJob: (state, action) => {
      state.job = action.payload;
    },

    setHashtags: (state, action) => {
      state.hashtags = [...state.hashtags, action.payload];
    },

    setHashtagsDelete: (state, action) => {
      state.hashtags = state.hashtags.filter(
        (hashtag) => hashtag !== action.payload
      );
    },

    setLikesCount: (state, action) => {
      state.likesCount = state.likesCount + action.payload;
    },

    setCommentsCount: (state, action) => {
      state.commentsCount = action.payload;
    },

    setNotices: (state, action) => {
      state.notices = action.payload;
    },

    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {
  setTitle,
  setBody,
  setName,
  setJob,
  setHashtags,
  setHashtagsDelete,
  setLikesCount,
  setCommentsCount,
  setNotices,
  setImage,
} = createPostSlice.actions;
export default createPostSlice.reducer;
