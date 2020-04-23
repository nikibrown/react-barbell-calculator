import React from "react";

const Unit = (props) => {
	return (
		<button
		// @click="emitClick"
		>
			<span className="unit-selected">&check;</span>
			<span>{props.unitLabel}</span>
		</button>
	);
};

export default Unit;
