import React, {Component} from 'react';
import axios from 'axios';
import Poster from './Poster';

class MovieSearch extends Component{
	constructor(props){
		super(props);
		this.state = {
			moviePosters: []
		}
		
	}

	//componentDidMount is where our initial AJAX requests go
	componentDidMount(){
		const userSearchTerm = this.props.match.params.searchTerm;
		const searchUrl = `http://api.themoviedb.org/3/search/movie?query=${userSearchTerm}&api_key=fec8b5ab27b292a68294261bb21b04a5`;
		axios.get(searchUrl).then((movieData)=>{
			console.log(movieData);
			this.setState({
				moviePosters: movieData.data.results
			})
		})
	}

	componentWillReceiveProps(newProps){
		console.log(newProps);
		const newSearchTerm = newProps.match.params.searchTerm;
		const searchUrl = `http://api.themoviedb.org/3/search/movie?query=${newSearchTerm}&api_key=fec8b5ab27b292a68294261bb21b04a5`;
		axios.get(searchUrl).then((movieData)=>{
			console.log(movieData);
			this.setState({
				moviePosters: movieData.data.results
			})
		})
	}

	render(){
		console.log(this.props);
		  const posters = this.state.moviePosters.map((poster, index)=>{
      const imagePath = `http://image.tmdb.org/t/p/w300${poster.poster_path}`;
      return (<Poster movie={poster} poster={imagePath} />);
    });
		return(
			<div>
				{posters}
			</div>
		)
	}
}

export default MovieSearch;