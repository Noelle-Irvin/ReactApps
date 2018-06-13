import React, {Component} from 'react';
import axios from 'axios';

class SingleMovie extends Component{
	constructor(){
		super();
		this.state = {
			movie: {},
			buttonClass: "btn btn-primary"
		}
		this.addFav = this.addFav.bind(this);
	}

	componentDidMount(){
		 const mid = this.props.match.params.movieId;
        axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=${apiKey}`)
        .then((movieData)=>{
            console.log(movieData);
            this.setState({
                movie: movieData.data
            })
        })

	}

	addFav(){
		const movieId = this.props.match.params.movieId;
		const addFavorite = axios({
			method: 'POST',
			url: `http://localhost:3030/addFav`,
			data:{
				movieId,
				token: localStorage.getItem('token')
			}
		})
		 addFavorite.then((favoriteResponse)=>{
        	console.log(favoriteResponse.data)
        	//if express tells me that msg is favAdded...
        	if(favoriteResponse.data.msg === "favAdded"){
        		this.setState({
        			buttonClass: "btn btn-success"
        		})
        	}else if(favoriteResponse.data.msg === "badToken"){
        		this.props.history.push('/login')
        	}
        })
	}

	render(){
		return(
			<div>
				<h1>{this.state.movie.title}</h1>
				<h3>{this.state.movie.tagline}</h3>
				<img src ={`http://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`} />
				<br/>
				<button className={this.state.buttonClass} onClick={this.addFav}>Add 
				to my favorites</button>
				<p>{this.state.movie.overview}</p>
			</div>
		);
	}

}

export default SingleMovie;