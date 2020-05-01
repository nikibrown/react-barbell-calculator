import React from "react";

const Barbell = (props) => {
	// const clickHandler = () => {
	// 	console.log(props.poundWeight + " was clicked");
	// };

	return (
		<div className="form-check form-check-inline">
			<input
				onChange={props.handleBarbellChange}
				className="form-check-input"
				type="radio"
				name={props.name}
				id={props.id}
				value={props.weight}
				defaultChecked={props.defaultChecked}
			/>
			<label className="form-check-label" htmlFor={props.id}>
				{props.weight}
				{props.barbellUnitLabel}
			</label>
		</div>
	);
};

export default Barbell;
