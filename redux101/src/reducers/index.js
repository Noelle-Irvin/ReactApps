//This is our master reducer file.
//It doesn't manage any particular piece of state.
//It simply contains all the individual pieces of state from each reducer.
//In other words... a single reducer contains a single
//object/piece of state, the root reducer contains all the reducers.

//STATEMENT OF DECLARATION
// I, the rootReducer, neither know, nor give a rip about React.
//I am independent of all your, stupid, silly empires (REACT, angular, Vue).
//I only care about Redux. 

// import the combineReducers object from redux so that we can make a rootReducer out of them.

import {combineReducers} from 'redux';

// import each individual reducer.
import HomeReducer from './HomeReducer';

//Build the root reducer using combineReducers
//we got that thing from redux above.
//combineReducers takes 1 arg, an object.

const rootReducer = combineReducers({
	home: HomeReducer
})

export default rootReducer;