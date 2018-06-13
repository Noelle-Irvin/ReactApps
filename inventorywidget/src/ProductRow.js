import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component{
	render(){
		return(
			<div className = "productRow">
				<div className="productName">
					{this.props.productRow}
				</div>
				<div className="productPrice">
					{this.props.productPrice}
				</div>
			</div>
		);
	}
}

export default ProductRow;