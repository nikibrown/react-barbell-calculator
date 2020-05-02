import React, { useState } from "react";

const Plate = (props) => {
	const clickHandler = () => {
		console.log("clickhandler ran");
		setPlateState({
			...plateState,
			isOnBarbell: true,
			plateCount: (plateState.plateCount += 2),
		});
	};

	const numberFormatting = (weight) => {
		let formattedWeight = weight.toString().replace(/^0+/, "");
		return formattedWeight;
	};

	const [plateState, setPlateState] = useState({
		isOnBarbell: false,
		plateCount: 0,
	});

	return (
		<button
			className={`btn btn-plate ${props.plateClasses}`}
			onClick={clickHandler}>
			<span className="weight">
				{numberFormatting(props.weight)}
				<span className="weight-label">{props.weightLabel}</span>
			</span>

			{plateState.isOnBarbell ? (
				<span className="badge badge-pill badge-danger plate-quantity">
					{plateState.plateCount}
				</span>
			) : (
				<span></span>
			)}
		</button>
	);
};

export default Plate;
