import React from "react";

const Plate = (props) => {
	const clickHandler = () => {
		console.log(props.poundWeight + " was clicked");
	};

	return (
		<button
			className={props.bsClasses}
			disabled={props.isDisabled}
			onClick={clickHandler}>
			<span>{props.text}</span>
			<span className="weight weight-pounds">
				{props.poundWeight}
				<span className="weight-label">lb</span>
			</span>
			<span className="weight weight-kilos">
				{props.kiloWeight}
				<span className="weight-label">kg</span>
			</span>
		</button>
	);
};

export default Plate;
