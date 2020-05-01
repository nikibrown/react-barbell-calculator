import React from "react";

const Unit = (props) => {
	return (
		<div className="form-check form-check-inline">
			<input
				onChange={props.handleUnitChange}
				className="form-check-input"
				type="radio"
				name={props.name}
				id={props.id}
				value={props.unitLabel}
				defaultChecked={props.defaultChecked}
			/>
			<label className="form-check-label" htmlFor={props.id}>
				{props.unitLabel}
			</label>
		</div>
	);
};

export default Unit;
