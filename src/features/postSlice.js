import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  slug: '',
  content: '',
  image: '',
  userId: '',
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // TODO: figure out this
  }
})