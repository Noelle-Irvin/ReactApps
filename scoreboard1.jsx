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
				<div className = "team">
					<div className = "teamName">
						<h3>Boston</h3>
					</div>
				</div>
				<div className="team">
					<div className = "teamName">
						<h3>Cleveland</h3>
					</div>
				</div>
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

