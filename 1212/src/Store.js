import {configureStore, createSlice} from '@reduxjs/toolkit'

let user = createSlice({//생성
  name : 'user',
  initialState:'sh',
  reducers : { //state수정해주는 함수
    changeName(state){
      return 'kim' + state
    }
  }
})

export let {changeName} = user.actions //동작 내보내기

let cart = createSlice({
  name: 'cart',
  initialState:[
    {id:0, name:'여성스러운 목폴라',count:2 },
    {id:1, name:'다리가 길어보이는 반바지',count:1 },
  ],
  reducers : { //state수정해주는 함수
    addCount(state, action){
      state[action.payload].count++
    }
  }
})
export let {addCount} = cart.actions
export default configureStore({
  reducer:{
    user: user.reducer,
    cart:cart.reducer
  }
})