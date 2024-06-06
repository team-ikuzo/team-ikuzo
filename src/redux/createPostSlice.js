import { createSlice } from '@reduxjs/toolkit';

const createPostSlice = createSlice({
  name: 'createPostSlice',
  initialState: {
    title: '',
    body: '',
    name: '',
    job: '',
    hashtags: [],
    likesCount: 0,
    commentsCount: 2,
    notices: '',
    imageURL: null,
    localImageURL: null
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
    clearHashtags: (state, action) => {
      state.hashtags = [];
    },

    setHashtagsDelete: (state, action) => {
      state.hashtags = state.hashtags.filter((hashtag) => hashtag !== action.payload);
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

    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
    setLocalImageURL: (state, action) => {
      state.localImageURL = action.payload;
    },

    clearImage: (state) => {
      state.imageURL = null;
      state.localImageURL = null;
    }
  }
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
  setImageURL,
  setLocalImageURL,
  clearImage,
  clearHashtags
} = createPostSlice.actions;
export default createPostSlice.reducer;
