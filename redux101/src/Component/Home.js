import React, {Component} from 'react';
//We need some glue. This component needs to know about the store
//Just because it's inside the Provider, isn't enough. React-redux only exposes
//the store when it has to for performance. 
//To accomplish this, we use the connect method from react-redux module
// 	(the glue between React and Redux)
import {connect} from 'react-redux';


class Home extends Component{

	render(){
		return(
			<h1>{this.props.homeText}</h1>
		)
	}
}

//We have connect. Great. But we need a way to get the stuff in the store to map to 
// the props of this component
//it takes one param , state
//mapStateToProps = Map Redux state to this component props
function mapStateToProps(state){
	//THE STATE PARAMETER IS THE ROOT REDUCER
	//this function will return an object, each property will be mapped to this components
	//props. Each value will be a piece of state or a property of the root reducer
	return {
		homeText: state.home //this is the same as the return value of the HomeReducer
	}
}

// export default Home;
//inside of containers(a fancy term for a component that knows about redux),
//	we dont export component. we export connect. 
//Connect is a function and we pass that function mapStateToProps

// Connect RETURNS A FUNCTION, which expects the component 
export default connect(mapStateToProps)(Home);