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
    images: null,
    localimages: null
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

    addlocalimages: (state, action) => {
      state.localimages = action.payload;
    },

    removelocalimages: (state, action) => {
      state.localimages = '';
    },

    addImage: (state, action) => {
      state.images = action.payload;
    },

    removeImage: (state, action) => {
      state.images = '';
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
  addImage,
  removeImage,
  addlocalimages,
  removelocalimages
} = createPostSlice.actions;
export default createPostSlice.reducer;
