import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';


// Import the store from redux so React components can use it.
import {createStore} from 'redux';
//Import the rootReducer so the store has some data
import reducers from './reducers/index';

//Make a store for redux to use. Use createStore which we brought in above 
// from redux. 
//Pass createStore the rootReducer which we just brought in as well.
//The rootReducer is all of the little reducers in one place.

const theStore = createStore(reducers);

// HOORAY! WE have a store with stuff in it. 

//We need a way to get the store to react. The module for the job is react-redux.
//react-redux is the glue in between react and redux. It's like the controller
//in between the model and the view. 
//React-Redux gives us a component called Provider.
//	The Provder component is around EVERYTHING that needs the glue.
// import {Provider} from 'react-redux'; NOW at the top of this page

//We will still render the App. BUT, we will render it inside of the Provider component.
//Provider component takes a prop of store which will be the redux store we made above.
//The redux store was made by createStore and handing it the rootReducer
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
