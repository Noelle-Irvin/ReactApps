import React, { Component } from 'react';

class ProductCategoryRow extends Component{
	constructor(props){
		super(props);
		this.state = {
			productCategory: null
		}
	}

	myCallBack = (dataFromProductTable)=>{
		this.setState({productCategory: dataFromProductTable});
	}

	render(){
		return(
			<div className="productCategoryRow">
				{this.props.productCategory}
			</div>
			);
	}
}

export default ProductCategoryRow;