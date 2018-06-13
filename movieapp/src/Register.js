import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
 
	constructor(){
		super();
		this.handleRegister = this.handleRegister.bind(this);
	}

 	handleRegister(event){
 		event.preventDefault();
 		// axios.post(`http://localhost:3030/register`).then((registerData)=>{
 		// 	console.log(registerData);
 		// })
 		//axios is how we make our ajax request
 		//in other words, how react talks to express/spring
 		const email = document.getElementById('email').value;
 		const password = document.getElementById('pwd').value;
 		console.log(password);
 		console.log(email);
		const registerRequest = axios({
			method: "POST",
			url: "http://localhost:3030/register",
			data: {
				email,
				password
			}
		});

		registerRequest.then((registerData)=>{
			console.log(registerData)
			if(registerData.data.msg === "registerSuccess"){
				// localStorage is the new cookie
				// Cookies are inherently insecure. They also can only hold 4k.
				// They are sent in their entirety on EVERY request
				// localStorage can hold up to 5MB, the data is NOT sent to the server
				// (unless you tell it to). localStorage is just a HashMap.
				localStorage.setItem('token', registerData.data.token)
				this.props.history.push('/')
			}
		})
		
 	}

 render(){
  return(

	<form onSubmit={this.handleRegister}>
	 <div className="form-group">
	  <label for="email">Email address:</label>
	  <input type="email" className="form-control" id="email"/>
	 </div>
	 <div className="form-group">
	  <label for="pwd">Password:</label>
	  <input type="password" className="form-control" id="pwd"/>
	 </div>
	 <div className="checkbox">
	  <label><input type="checkbox" /> Remember me</label>
	 </div>
	 <button type="submit" className="btn btn-default">Register</button>
	</form>
  ) 
 }
}
export default Register;
