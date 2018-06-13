import React, {Component} from 'react';
import './Images.css';

function Images(props){
	
	// Map through images
	var map = props.atlImages.map((image,index)=>{
		return (
			<div>
				<img id="images" src={image}/>
			</div>
			)
	})

	return(
		<div>
			{map}
		</div>
	);
}

export default Images;