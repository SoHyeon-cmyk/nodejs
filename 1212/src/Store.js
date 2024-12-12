import {configureStore, createSlice} from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState:'sh'
})
let cart = createSlice({
  name: 'cart',
  initialState:[
    {id:0, name:'여성스러운 목폴라',count:2 },
    {id:1, name:'다리가 길어보이는 반바지',count:1 },
  ]
})
export default configureStore({
  reducer:{
    user: user.reducer,
    cart:cart.reducer
  }
})