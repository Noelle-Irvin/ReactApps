import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{
 
 render(){
  return(

	<form action="/action_page.php">
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
	 <button type="submit" className="btn btn-default">Submit</button>
	</form>
  ) 
 }
}
export default Login;
