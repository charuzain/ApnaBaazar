import React, { useContext, useEffect, useReducer, useState } from 'react';
import reducer from '../reducers/user_reducer';
import axios from "axios";

import {
  DISPLAY_ALERT, 
  CLEAR_ALERT,
  REGISTER_USER_BEGIN, 
  REGISTER_USER_SUCCESS, 
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
} from "../actions";

const user = localStorage.getItem('user')
// console.log(user);
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user):null,
}



const UsersContext = React.createContext()

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)

  }

  const addUserToLocalStorage = ( user ) => {
    localStorage.setItem('user', JSON.stringify(user))
    console.log(user);
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
  }

  const registerUser = async (currentUser) => {
    // console.log(currentUser);
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post('http://localhost:3001/register', currentUser)
      console.log(response.data.msg);
      const email = response.data.email
      const password = response.data.password
      const user = { email :email,
                      password:password}

      if(user){
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user }
      })
        addUserToLocalStorage(user)
    }

      if(response.data.msg){
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: { msg: response.data.msg }
        })
      }


    } 
    catch(error){
      console.log(error);
    }
    // catch (error) {
    //   console.log(error.response);
    //   dispatch({
    //     type: REGISTER_USER_ERROR,
    //     payload: { msg: error.response.data.msg }
    //   })
    // }

    clearAlert()

  }

  const loginUser =async(currentUser)=>{
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const response = await axios.post('http://localhost:3001/login', currentUser)
      console.log(response.data);
      const {user} = response
      console.log(user);


        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: { user }
        })
        addUserToLocalStorage({user})
      

      // if (response.data.msg) {
      //   dispatch({
      //     type: LOGIN_USER_ERROR,
      //     payload: { msg: response.data.msg }
      //   })
      // }


    }
    
    catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg }
      })
    }

    clearAlert()


  }

  return (<UsersContext.Provider value={{ ...state, displayAlert, registerUser,loginUser }}>
    {children}
  </UsersContext.Provider>
  )
}
const useUsersContext = () => {
  return useContext(UsersContext)
}


export { UsersProvider, initialState, useUsersContext }
