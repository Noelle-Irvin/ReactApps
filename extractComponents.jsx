function formatDate(date){
	return date;
}

var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]

function UserBadges(props){
	return(
	<div className="UserBadges">
	 	<div className="badge">{props.userBadge[0]}</div>
	 	<div className="badge">{props.userBadge[1]}</div>
	 	<div className="badge">{props.userBadge[2]}</div>
	 </div>
	)
}

function CommentBody(props){
	return(
	<div className="Comment-body">
	 	<h1>{props.commentHeading}</h1>
	 	<div className="Comment-text">{props.text}</div>
		 <div className="Comment-date">
		 	{formatDate(props.date)}
		 </div>
	 </div>
	)
}

function Avatar(props){
	return(
 		<img className="Avatar"
		 src={props.author.avatarUrl}
		 alt={props.author.name}
		 />
	)
}

function UserInfo(props){
	return(
	<div className="UserInfo">
		 <Avatar author = {props.author} />
		 <div className="UserInfo-name">
		 	{props.author.name}
		 </div>
	 </div>
	)
}

function Comment(props) {
 return (
 <div className="Comment">
	 <UserInfo author = {props.data.author}/>
	 <CommentBody commentHeading = {props.data.commentHeading} text = {props.data.text} date = {props.data.date}/>
	 <UserBadges userBadge = {props.data.userBadge}/>
 </div>
 );
}

ReactDOM.render(
	<div>
	<Comment data = {data[0]} />
	<Comment data = {data[1]} />
	</div>,
	document.getElementById('root')
	)

