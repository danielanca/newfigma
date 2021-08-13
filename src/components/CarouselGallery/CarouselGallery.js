import classes from "../CarouselGallery/CarouselGallery.module.css";
import React, { Fragment } from "react";
const CarouselGallery = (props) => {
	let childrens = [];
	let index = 0;
	React.Children.forEach(props.children, function (child) {
		childrens[index] = child;
		index++;
	});

	console.log(
		"Childrens:" +
			childrens[0].props.orderNo +
			"   " +
			childrens[1].props.orderNo
	);

	return (
		<div className="row">
			<div>{childrens[0]}</div>
			<div>{childrens[1]}</div>
			<div>{childrens[2]}</div>
		</div>
	);
};

export default CarouselGallery;
