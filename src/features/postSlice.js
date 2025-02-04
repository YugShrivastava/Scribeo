import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  slug: '',
  postContent: '',
  featuredImage: '',
  status: '',
  userId: '',
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.title = action.payload.title
      state.slug = action.payload.slug
      state.postContent = action.payload.content
      state.featuredImage = action.payload.featuredImage
      state.status = action.payload.status
      state.userId = action.payload.userId
    },
    updatePost: (state, action) => {
      state.title = action.payload.title
      state.slug = action.payload.slug
      state.postContent = action.payload.content
      state.status = action.payload.status
      state.featuredImage = action.payload.featuredImage
    },
    deletePost: (state) => {
      state.status = false
    },
    readPost: (state, action) => {

    },
    
  }
})

export default postSlice.reducer

export const {addPost, deletePost, updatePost, readPost} = postSlice.actions