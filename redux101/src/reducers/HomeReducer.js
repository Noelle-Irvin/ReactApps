//A reducer is a FUNCTION.
//That function returns a piece of state.
//A piece of state is just an object.

//ALL reducer functions have 2 params in their signature:
//1. current value of its state (object)
//1b. Thanks to ES6, you will usually want to provide a default value for state,
//		in case it's not set
//2. info that came from the dispatcher

export default function(state = "Home Page Text", action){
	if(action.type === "UPDATE_HOME"){
		return action.payload
	}
	return state;
}