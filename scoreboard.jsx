//React components are automatically passed 1 param. Props
const Counter = React.createClass({
	getInitialState: function(){
		return{
			score: 0
		}
	},

	losePoint: function (){
		// this.state.score--; THIS IS EVIL
		if(this.state.score > 0){
			this.setState({
				score: this.state.score - 1 //we dont mutate score with (--)
			})
		}
	},

	addPoint: function (){
		this.setState({
			score: this.state.score + 1
		})
	},

	render: function(){
		return(
			<div className="counter">
				{/*Danger = Red Button */}
				<button className="btn btn-danger" onClick={this.losePoint}>-</button>
				<div className="team-score">{this.state.score}</div>
				{/*Success = Green button */}
				<button className="btn btn-success" onClick={this.addPoint}>+</button>
			</div>
		)
	}
});


function Team(props){
	return(
		<div className = {`team ${props.teamName}`}>
			<div className = "teamName">
				<h3>{props.teamName}</h3>
			</div>
			<Counter />
		</div>
	)
}

//React is a bunch of legos. The legos are called components.
//A component is a fancy name for a class-like UI thing.
// A componenet is REGULAR JAVASCRIPT until you get inside
// the return... once inside, you are writing JSX
function Scoreboard(){
	console.log("Sanity Check")
	// Main is going to return a piece os JSX. EVERY React component
	// MUST return a single DOM element.
	return(
		<div className="scoreboard">
			<div className = "header">
				<h1>Celtics vs Cavs - Game 3</h1>
			</div>
			<div className="teams">
				<Team teamName = "Boston"/>
				<Team teamName = "Cleveland"/>		
			</div>
		</div>
		)
}

// the render method (inside ReactDOM) takes 2 arguments:
// 1. What.
// 2. Where
// React.createElement('h1','SanityCheck')
ReactDOM.render(
	// <h1>Sanity Check!</h1>,
	<Scoreboard />,
	document.getElementById('root')
)

