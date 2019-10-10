import {createStore, combineReducers} from 'redux';
import createCommentReduce from './createCommentReduce';

let reduces = combineReducers({
    createCommentReduce
})

let store = createStore(reduces)

export default store