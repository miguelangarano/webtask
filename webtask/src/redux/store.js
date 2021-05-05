import {createStore, combineReducers} from 'redux'

import initialData from './initialData'

import {imageSelectedReducer} from './reducers'

const reducers = combineReducers({
    imageSelected: imageSelectedReducer
})

export default createStore(
    (state, action) => reducers(state, action),
    initialData
)