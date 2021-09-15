import axios from "axios";
import { ADD_TODO_SUCCESS, ADD_TODO_REQUEST, ADD_TODO_FAILURE, GET_TODO_SUCCESS, GET_TODO_REQUEST, GET_TODO_FAILURE, DELETE_TODO_SUCCESS, DELETE_TODO_REQUEST, DELETE_TODO_FAILURE, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_REQUEST, TOGGLE_TODO_FAILURE, GETINDI_TODO_SUCCESS, EDIT_TODO_REQUEST, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE } from "./actionType";


export const addtodoSuccess = (payload) => {
    return {

        type: ADD_TODO_SUCCESS,
        payload
    }
    
}
export const addtodoRequest = () => {
    return {

        type: ADD_TODO_REQUEST,
       
    }
    
}
export const addtodoFailure = () => {
    return {

        type: ADD_TODO_FAILURE,
    
    }
    
}
export const gettodoSuccess = (payload) => {
    return {

        type: GET_TODO_SUCCESS,
        payload
    }
    
}
export const gettodoRequest = () => {
    return {

        type: GET_TODO_REQUEST,
       
    }
    
}
export const gettodoFailure = () => {
    return {

        type: GET_TODO_FAILURE,
    
    }
    
}
export const deletetodoSuccess = (payload) => {
    return {

        type: DELETE_TODO_SUCCESS,
        payload
    }
    
}
export const deletetodoRequest = () => {
    return {

        type: DELETE_TODO_REQUEST,
       
    }
    
}
export const deletetodoFailure = () => {
    return {

        type: DELETE_TODO_FAILURE,
    
    }
    
}
export const toggletodoSuccess = () => {
    return {

        type: TOGGLE_TODO_SUCCESS,
       
    }
    
}
export const toggletodoRequest = () => {
    return {

        type: TOGGLE_TODO_REQUEST,
       
    }
    
}
export const toggletodoFailure = () => {
    return {

        type: TOGGLE_TODO_FAILURE,
    
    }
    
}

export const getinditodoSuccess = (payload) => {
    return {

        type: GETINDI_TODO_SUCCESS,
        payload
    }

}

export const editTodoRequest = () => {
    return { type: EDIT_TODO_REQUEST }
}

export const editTodoSuccess = (payload) => {
    return { type: EDIT_TODO_SUCCESS, payload }
}

export const editTodoFailure = (payload) => {
    return { type: EDIT_TODO_FAILURE, payload }
}




export const getdata = () => async (dispatch) => {
    dispatch(gettodoRequest())
    try {
        let { data } = await axios.get('https://todo-api-data.herokuapp.com/todo')
        dispatch(gettodoSuccess(data))
    } catch (error) {
        dispatch(gettodoFailure())
    }
}
export const getdataindividual = (payload) => async (dispatch) => {
  console.log(payload.id)
    try {
        let { data } = await axios.get(`https://todo-api-data.herokuapp.com/todo/${payload}`)
        dispatch(getinditodoSuccess(data))
    } catch (error) {
      console.log(error)
    }
}
export const adddata = (payload) => async (dispatch) => {
    dispatch(addtodoRequest())
    try {
        let { data } = await axios.post(`https://todo-api-data.herokuapp.com/todo`,payload)
        dispatch(addtodoSuccess(data))
    } catch (error) {
        dispatch(addtodoFailure())
    }
}
export const deletedata = (payload) => async (dispatch) => {
    console.log(payload)
    dispatch(deletetodoRequest())
    try {
        let { data } = await axios.delete(`https://todo-api-data.herokuapp.com/todo/${payload}`)
        console.log(data)
        dispatch(deletetodoSuccess(data))
    } catch (error) {
        dispatch(deletetodoFailure())
    }
}
export const toggledata = (payload) => async (dispatch) => {
    console.log(payload)
    dispatch(toggletodoRequest())
    try {
        let { data } = await axios.patch(`https://todo-api-data.herokuapp.com/todo/${payload.id}`,{
            ...payload,
            status:!payload.status
        })
        console.log("updatedTodo",data)
        dispatch(toggletodoSuccess(data))
        
    } catch (error) {
        dispatch(toggletodoFailure())
    }
}
export const editdata = (payload,value) => async (dispatch) => {

    const { todo, individualItem} = payload
    dispatch(editTodoRequest())
    try {
        let { data } = await axios.patch(`https://todo-api-data.herokuapp.com/todo/${individualItem.id}`,{
            ...todo,
            title: value.toUpperCase()
        })
        console.log("updatedTodo",data)
        dispatch(editTodoSuccess(data))
     
        
    } catch (error) {
        dispatch(editTodoFailure())
    }
  

}

