import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import './ProductTable.css';
import ProductRow from './ProductRow';

class ProductTable extends Component{
	render() {
		return(
			<div className = "productTable">
				<div className = "name">
				Name</div>
				<div className = "price">
				Price</div>
				<ProductCategoryRow productCategory= "Sporting Goods" />
				<ProductRow productRow = "Football" productPrice = "$49.99"/>
				<ProductRow />
				<ProductRow />
				<ProductCategoryRow productCategory= "Electronics" />

			</div>
			);
	}
}

export default ProductTable;



var productCategoryArray = ["Sporting Goods", "Electronics"];