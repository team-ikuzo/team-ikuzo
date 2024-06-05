import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/supabase';

export const fetchPost = createAsyncThunk('post/fetchPost', async (id) => {
  const { data: post, error: postError } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();
  
  if (postError) {
    throw Error(postError.message);
  }

  const { data: likes, error: likesError } = await supabase
    .from('likes')
    .select('*')
    .eq('post_id', id);

  if (likesError) {
    throw Error(likesError.message);
  }

  return { post, likes };
});

export const toggleLike = createAsyncThunk('post/toggleLike', async ({ postId, userId }) => {
  const { data: existingLike, error: likeError } = await supabase
    .from('likes')
    .select('*')
    .eq('post_id', postId)
    .eq('user_id', userId)
    .single();

  if (likeError && likeError.code !== 'PGRST116') {
    throw Error(likeError.message);
  }

  if (existingLike) {
    const { data, error } = await supabase
      .from('likes')
      .delete()
      .eq('id', existingLike.id)
      .select();

    if (error) {
      throw Error(error.message);
    }

    return { postId, userId, liked: false };
  } else {
    const { data, error } = await supabase
      .from('likes')
      .insert({ post_id: postId, user_id: userId })
      .select()
      .single();

    if (error) {
      throw Error(error.message);
    }

    return { postId, userId, liked: true };
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: null,
    loading: false,
    error: null,
    likes: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload.post;
        state.likes = action.payload.likes;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(toggleLike.fulfilled, (state, action) => {
        const { postId, userId, liked } = action.payload;
        if (liked) {
          state.likes.push({ post_id: postId, user_id: userId });
        } else {
          state.likes = state.likes.filter((like) => like.post_id !== postId || like.user_id !== userId);
        }
      });
  },
});

export default postSlice.reducer;
export { postSlice };
