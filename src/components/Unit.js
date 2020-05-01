import React from "react";

const Unit = (props) => {
	// const [unitSelection, setUnitSelection] = useState({
	// 	pounds: null,
	// 	kilos: null,
	// 	isSelected: false,
	// });

	// const selectUnits = () => {
	// 	setUnitSelection({
	// 		...unitSelection,
	// 		isSelected: !unitSelection.isSelected,
	// 	});
	// };

	return (
		<div className="form-check form-check-inline">
			<input
				//onChange={selectUnits}
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
