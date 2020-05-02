import React from "react";

const Plate = (props) => {
	const clickHandler = () => {
		console.log(props.weight + " was clicked");
	};

	const numberFormatting = (weight) => {
		let formattedWeight = weight.toString().replace(/^0+/, "");
		return formattedWeight;
	};

	// bullshitNumberFormating: function(decimalWithFuckingLeadingZero) {
	// 		let stringWithNoFuckingLeadingZero = decimalWithFuckingLeadingZero
	// 			.toString()
	// 			.replace(/^0+/, "");
	// 		return stringWithNoFuckingLeadingZero;
	// };

	return (
		<button
			className={`btn btn-plate ${props.plateClasses}`}
			onClick={clickHandler}>
			<span className="weight">
				{numberFormatting(props.weight)}
				<span className="weight-label">{props.weightLabel}</span>
			</span>
			<span class="badge badge-pill badge-danger plate-quantity">
				{props.plateCount}
			</span>
		</button>
	);
};

export default Plate;
