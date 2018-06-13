import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Button from './Component/Button';


class App extends Component {

  constructor(){
    super();
    this.state = {
      homeText:"Home Page"
  }
  this.updateHome = this.updateHome.bind(this);
}
  updateHome(){
    this.setState({
      homeText: "User clicked button"
    })
  }


  render() {
    return (
      <div className="App">

        <Home text={this.state.homeText} />
        <Button updateFunction={this.updateHome}/>

      </div>
    );
  }
}

export default App;
