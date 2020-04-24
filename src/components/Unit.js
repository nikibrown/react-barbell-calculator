import React from "react";

const Unit = (props) => {
	const clickHandler = () => {
		console.log(props.unitLabel + " was clicked");
	};

	return (
		<button
			className={props.bsClasses}
			onClick={clickHandler}
			disabled={props.isDisabled}
			selected={props.selected}>
			<span className="unit-selected">✓</span>
			<span>{props.unitLabel}</span>
		</button>
	);
};

export default Unit;
