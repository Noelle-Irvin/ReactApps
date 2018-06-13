import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		//if we want to use the current "this" inside of any method,
		//we need to "bind" the current this, using the bind method
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//EVERY JS event gets the event object
	handleSubmit(event){
		event.preventDefault();
		console.dir(event.target);
		const searchTerm = event.target[0].value;
		console.log(searchTerm);
		// this.props.searchFunction(searchTerm);
		console.log(this.props);
		this.props.history.push(`/search/${searchTerm}`);
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text"/>
				<button className="btn btn-primary" type="submit">Movie Search</button>
			</form>
		);
	}
}

export default SearchBar;