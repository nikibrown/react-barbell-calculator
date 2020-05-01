import React from "react";

const Plate = (props) => {
	const clickHandler = () => {
		console.log(props.weight + " was clicked");
	};

	return (
		<button
			className={`btn btn-plate ${props.plateClasses}`}
			// className={props.bsClasses}
			// disabled={props.isDisabled}
			onClick={clickHandler}>
			<span>{props.text}</span>
			{/* <span className="weight weight-pounds">
				{props.weight}
				<span className="weight-label">lb</span>
			</span> */}
			<span className="weight">
				{props.weight}
				<span className="weight-label">{props.weightLabel}</span>
			</span>
		</button>
	);
};

export default Plate;
