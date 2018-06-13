import React, { Component } from 'react';

class SearchBar extends Component{
	render(){
		return(
			<div className = "searchBar">
				<input type="text" placeholder="Search..." onkeyup = "searchFunction()" />
				<br/>
				<input type="checkbox" id="myCheck" onclick="myFunction()" />
				Only show product in stock

			</div>
			)
	}
}

export default SearchBar;