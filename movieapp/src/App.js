import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';
import SearchBar from './SearchBar';
//add react router
//Browser router as Router is the MAIN component in our app now
//Link is the new <a href="">
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './About';
import MovieSearch from './MovieSearch';
import SingleMovie from './SingleMovie';
import BootstrapNavBar from './BootstrapNavBar';
import Login from './Login';
import Register from './Register';

class App extends Component {

  constructor(props){
    //constructor runs once when the object/component is created
    super(props);
      //call supe in order to pass up to react.component whatever it needs
    //After super, we can use the word this
    this.state={
      //set the initial state of the var: this.state.moviePosters to []
      moviePosters: []
    }
    this.newUserSearch = this.newUserSearch.bind(this);
  }
  //special lifecycle method will run as soon as the first render runs
  //this is where AJAX goes
  componentDidMount(){
    console.log("The component has mounted.")
    const url = `http://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    $.getJSON(url, (movieData)=>{
      console.log(movieData);
      this.setState({
        //because we change the state here, the render function will run again
        moviePosters: movieData.results
      });
    });
  }

  newUserSearch(movieTitle){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}`;
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
      
      this.setState({
        moviePosters: movieData.results
      });

    });
  }

//EVERY React component MUST have a render
  render() {
    if(this.state.moviePosters === 0){
      return "Loading..."
    }

    const posters = this.state.moviePosters.map((poster, index)=>{
      const imagePath = `http://image.tmdb.org/t/p/w300${poster.poster_path}`;
      return (<Poster movie={poster} poster={imagePath} />);
    });
    console.log(posters);
    console.log("Render is running...")
    //return a single DOM element (jsx_)
    return (
      //ROUTER GOES AROUND EVERYTHING
      <Router>
        <div className="App">
          <Route path="/" component={BootstrapNavBar} />
          <Route path="/" component={SearchBar} /> 
          <Route path="/about" render={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          {/*You dont always have to give it a component.
            You can give it a callback which can render components*/}
          <Route exact path="/" render={()=>{
            return(
              <div>
                {posters}
              </div>
            )
          }} />
          <Route path="/search/:searchTerm" component={MovieSearch} />
          <Route path="/movie/:movieId" component={SingleMovie} />
        </div>
      </Router>
    );
  }
}

export default App;
