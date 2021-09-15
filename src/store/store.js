import { createStore, applyMiddleware,compose } from 'redux'
import { todoreducers } from '../Reducers/todoreducers'
import thunk from 'redux-thunk'


export const store = createStore(
    todoreducers,
  
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);