import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import {v4 as uuidv4} from "uuid"

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    count:0,
    contacts:[
      {
        id:1,
        name:"Putin kakku",
        email:"putin@kakku.com",
      },
      {
        id:2,
        name:"Baiden dadu",
        email:"putin@kakku.com",
      },
      {
        id:3,
        name:"Kim bro",
        email:"putin@kakku.com",
      }
    ],
    filter: "All",
    contact: {
      name: "",
      email:""
    },
  },
  reducers: {
    increment: (state) => { 
      state.count += 1
      console.log(state.count)
    },
    decrement: (state) => {
      state.count -= 1
    },
    
    updataData:(state, action)=>{
      // state.contact = state.contacts.find((item) => item.id == action.payload)
      state.contacts = state.contacts.filter((t) => t.id === action.payload.id ? action.payload : t)
      console.log(action.payload)
    },
    addData: (state, action) => { 
      console.log(action.payload)
      const newData = {...action.payload, id:uuidv4()}
      state.contacts = [...state.contacts, newData]
      // console.log(newData)
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      console.log(id, name, email)
      console.log(state.contacts)
      const existingUser = state.contacts.find(user => user.id == id);
      const ddd = (data) => data == existingUser;
      const indexResult = state.contacts.findIndex(ddd)
      console.log(indexResult)
      console.log(existingUser.name)
      if(existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    removeData: (state, action) => { 
      // const newData = {...action.payload, id:uuidv4()}
      // state.contacts.slice(0,1)
      let newdsfs = state.contacts.filter((c)=> c.id !==action.payload)
      state.contacts = newdsfs
      console.log(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment,addData, decrement,removeData ,editUser,updataData } = counterSlice.actions
export default counterSlice.reducer