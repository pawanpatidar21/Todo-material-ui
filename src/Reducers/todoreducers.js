import { ADD_TODO_SUCCESS, ADD_TODO_REQUEST, ADD_TODO_FAILURE, GET_TODO_SUCCESS, GET_TODO_REQUEST, GET_TODO_FAILURE, DELETE_TODO_SUCCESS, DELETE_TODO_REQUEST, DELETE_TODO_FAILURE, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_REQUEST, TOGGLE_TODO_FAILURE, GETINDI_TODO_SUCCESS, EDIT_TODO_REQUEST, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE } from "./actionType";

const init = {
    todo: [],
    individualItem: { title: "", status: "" },
    Loading: false,
    Error:false
}


export const todoreducers = (state = init, { type, payload }) => {
    switch(type){
        case ADD_TODO_REQUEST:
            return {
                ...state,
                Loading: true,
                Error:false
               
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todo: [...state.todo, payload],
                Loading:false
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                Loading: false,
                Error:true
             
            }
        case GET_TODO_REQUEST:
            return {
                ...state,
                Loading: true,
                Error:false
               
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todo: payload,
                Loading: false,
                Error:false
            }
        case GET_TODO_FAILURE:
            return {
                ...state,
                Loading: false,
                Error: true
             
            }
        case DELETE_TODO_REQUEST:
            return {
                ...state,
                Loading: true,
                Error: false
               
            }
        case DELETE_TODO_SUCCESS:
            const deletitem = state.todo.filter((el)=>el.id !== payload)
            return {
                ...state,
                todo: deletitem,
                Loading: false,
                Error: false
            }
        case DELETE_TODO_FAILURE:
            return {
                ...state,
                Loading: false,
                Error: true
             
            }
        case TOGGLE_TODO_REQUEST:
            return {
                ...state,
                Loading: true,
                Error: false
               
            }
        case TOGGLE_TODO_SUCCESS:
       
            return {
                ...state,
                Loading: false,
                Error: false
             
            }
        case TOGGLE_TODO_FAILURE:
            return {
                ...state,
                Loading: false,
                Error: true
             
            }
        case GETINDI_TODO_SUCCESS:
            return {
                ...state,
                individualItem: payload,
                Loading: false,
                Error: false
            }
        case EDIT_TODO_FAILURE:
            return {
                ...state,
                Loading: false,
                Error: true

            }
        case EDIT_TODO_REQUEST:
            return {
                ...state,
                Loading: true,
                Error: false

            }
        
        case EDIT_TODO_SUCCESS:
            return {
                ...state,
                individualItem: payload,
                Loading: false,
                Error: false
            }
        default:
            return state
    }
}