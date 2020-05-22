import React, { useState } from "react";
import "../assets/scss/global.scss";
import { textContent } from "../assets/data/textContent";
import { settings } from "../assets/data/settings";

import Unit from "./Unit";
import Barbell from "./Barbell";
import Plate from "./Plate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle, faUndo } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faInfoCircle, faUndo);

// Data!

const unitItems = [
	{
		bsClasses: "btn btn-md btn-secondary unit-pounds",
		unitLabel: "Pounds",
		disabled: false,
		name: "unit-radio-selection",
		id: "unit-radio-selection-pounds",
		defaultChecked: false,
	},
	{
		bsClasses: "btn btn-md btn-secondary unit-kilos",
		unitLabel: "Kilos",
		disabled: false,
		name: "unit-radio-selection",
		id: "unit-radio-selection-kilos",
		defaultChecked: false,
	},
];

const barbellItemsPounds = [
	{
		weight: 45,
		barbellUnitLabel: "lb",
		id: "barbell-pounds-45",
		name: "barbell-radio-selection",
		defaultChecked: false,
		disabled: false,
	},
	{
		weight: 35,
		barbellUnitLabel: "lb",
		id: "barbell-pounds-35",
		name: "barbell-radio-selection",
		defaultChecked: false,
		disabled: false,
	},
	{
		weight: 15,
		barbellUnitLabel: "lb",
		id: "barbell-pounds-15",
		name: "barbell-radio-selection",
		defaultChecked: false,
		disabled: false,
	},
];

const barbellItemsKilos = [
	{
		weight: 20,
		barbellUnitLabel: "kg",
		id: "barbell-kilos-20",
		name: "barbell-radio-selection",
		defaultChecked: false,
		disabled: false,
	},
	{
		weight: 15,
		barbellUnitLabel: "kg",
		id: "barbell-kilos-15",
		name: "barbell-radio-selection",
		defaultChecked: false,
		disabled: false,
	},
	{
		weight: 6.8,
		barbellUnitLabel: "kg",
		id: "barbell-kilos-6-8",
		name: "barbell-radio-selection",
		defaultChecked: false,
		disabled: false,
	},
];

const largeKiloPlates = [
	{
		plateClasses: "kilo-weight-25 weight-lg",
		weight: 25,
		weightLabel: "kg",
		id: "kilo-weight-25",
	},
	{
		plateClasses: "kilo-weight-20 weight-lg",
		weight: 20,
		weightLabel: "kg",
		id: "kilo-weight-20",
	},
	{
		plateClasses: "kilo-weight-15 weight-lg",
		weight: 15,
		weightLabel: "kg",
		id: "kilo-weight-15",
	},
	{
		plateClasses: "kilo-weight-10 weight-lg",
		weight: 10,
		weightLabel: "kg",
		id: "kilo-weight-10",
	},
];

const smallKiloPlates = [
	{
		plateClasses: "kilo-weight-5 weight-sm",
		weight: 5,
		weightLabel: "kg",
		id: "kilo-weight-5",
	},
	{
		plateClasses: "kilo-weight-2-5 weight-sm",
		weight: 2.5,
		weightLabel: "kg",
		id: "kilo-weight-2-5",
	},
	{
		plateClasses: "kilo-weight-2 weight-sm",
		weight: 2,
		weightLabel: "kg",
		id: "kilo-weight-2",
	},
	{
		plateClasses: "kilo-weight-1 weight-sm",
		weight: 1,
		weightLabel: "kg",
		id: "kilo-weight-1",
	},
	{
		plateClasses: "kilo-weight-0-5 weight-sm",
		weight: 0.5,
		weightLabel: "kg",
		id: "kilo-weight-0-5",
	},
];

const largePoundPlates = [
	{
		plateClasses: "pound-weight-55 weight-lg",
		weight: 55,
		weightLabel: "lb",
		id: "pound-weight-55",
	},
	{
		plateClasses: "pound-weight-45 weight-lg",
		weight: 45,
		weightLabel: "lb",
		id: "pound-weight-45",
	},
	{
		plateClasses: "pound-weight-35 weight-lg",
		weight: 35,
		weightLabel: "lb",
		id: "pound-weight-35",
	},
	{
		plateClasses: "pound-weight-25 weight-lg",
		weight: 25,
		weightLabel: "lb",
		id: "pound-weight-25",
	},
	{
		plateClasses: "pound-weight-15 weight-lg",
		weight: 15,
		weightLabel: "lb",
		id: "pound-weight-15",
	},
	{
		plateClasses: "pound-weight-10 weight-lg",
		weight: 10,
		weightLabel: "lb",
		id: "pound-weight-10",
	},
];

const smallPoundPlates = [
	{
		plateClasses: "pound-weight-5 weight-sm",
		weight: 5,
		weightLabel: "lb",
		id: "pound-weight-5",
	},
	{
		plateClasses: "pound-weight-2-5 weight-sm",
		weight: 2.5,
		weightLabel: "lb",
		id: "pound-weight-2-5",
	},
	{
		plateClasses: "pound-weight-1 weight-sm",
		weight: 1,
		weightLabel: "lb",
		id: "pound-weight-1",
	},
	{
		plateClasses: "pound-weight-0-7-5 weight-sm",
		weight: 0.75,
		weightLabel: "lb",
		id: "pound-weight-0-7-5",
	},
	{
		plateClasses: "pound-weight-0-5 weight-sm",
		weight: 0.5,
		weightLabel: "lb",
		id: "pound-weight-0-5",
	},
	{
		plateClasses: "pound-weight-0-2-5 weight-sm",
		weight: 0.25,
		weightLabel: "lb",
		id: "pound-weight-0-2-5",
	},
];

const Calculator = (props) => {
	// state for info section
	const [infoVisible, setInfoVisibility] = useState({
		showInfo: false,
	});

	const toggleInfo = () => {
		setInfoVisibility({
			...infoVisible,
			showInfo: !infoVisible.showInfo,
		});
	};

	// state for units

	const [unitSelection, setUnitSelection] = useState({
		selectedUnit: "Pounds",
	});

	const handleUnitChange = (changeEvent) => {
		setUnitSelection({
			...unitSelection,
			selectedUnit: changeEvent.target.value,
		});
		disableUnitSelection();
	};

	const disableUnitSelection = () => {
		unitItems.forEach((unit) => {
			unit.disabled = true;
		});
	};

	// logic for unitLabel/barbell/plate data switching
	let unitLabel;
	let barbellDataType;
	let smallPlateType;
	let largePlateType;
	if (unitSelection.selectedUnit === "Pounds") {
		unitLabel = <span className="total-weight-pounds">lb</span>;
		barbellDataType = barbellItemsPounds;
		largePlateType = largePoundPlates;
		smallPlateType = smallPoundPlates;
	} else {
		unitLabel = <span className="total-weight-kilos">kg</span>;
		barbellDataType = barbellItemsKilos;
		largePlateType = largeKiloPlates;
		smallPlateType = smallKiloPlates;
	}

	// state for barbells
	const [barbellSelection, setBarbellSelection] = useState({
		selectedBarbell: 0,
	});

	const handleBarbellChange = (changeEvent) => {
		setBarbellSelection({
			...barbellSelection,
			selectedBarbell: changeEvent.target.value,
		});

		addBarbellWeight(changeEvent.target.value);
		disableBarbellSelection();
	};

	const disableBarbellSelection = () => {
		barbellItemsPounds.forEach((barbell) => {
			barbell.disabled = true;
		});
		barbellItemsKilos.forEach((barbell) => {
			barbell.disabled = true;
		});
	};

	// state for totalWeight

	const [totalWeight, setTotalWeight] = useState({
		totalWeightadded: 0,
	});

	const addBarbellWeight = (barbellWeight) => {
		let updatedWeight =
			parseInt(barbellWeight, 10) +
			parseInt(totalWeight.totalWeightadded, 10);

		// add barbell weight
		setTotalWeight({
			...totalWeight,
			totalWeightadded: updatedWeight,
		});
	};

	const addPlateWeight = (plateWeight) => {
		let updatedPlateWeight =
			parseInt(totalWeight.totalWeightadded, 10) + plateWeight * 2;
		console.log(updatedPlateWeight);

		setTotalWeight({
			...totalWeight,
			totalWeightadded: updatedPlateWeight,
		});
	};

	// state for plates

	const handlePlateAdd = (index, plateType) => {
		if (plateType === "large") {
			addPlateWeight(largePlateType[index].weight);
		} else {
			addPlateWeight(smallPlateType[index].weight);
		}
	};

	return (
		<div id="app">
			<header
				className={infoVisible.showInfo ? "show" : "hide"}
				id="info">
				<nav className="navbar navbar-dark bg-dark">
					<div className="app-container">
						<p
							dangerouslySetInnerHTML={{
								__html: textContent.moreInfo,
							}}></p>
					</div>
				</nav>
			</header>
			<header>
				<nav className="navbar navbar-dark navbar-main">
					<div className="app-container justify-content-between">
						<h1 className="navbar-brand">
							<span className="navbar-brand">
								{textContent.appTitle}
							</span>
						</h1>
						<button
							className="btn btn-link"
							onClick={() => toggleInfo()}
							type="button">
							<FontAwesomeIcon icon={faInfoCircle} />
						</button>
					</div>
				</nav>
			</header>
			<main>
				<div className="total-weight">
					<div className="app-container justify-content-between">
						<nav className="navbar navbar-light navbar-total-weight">
							<h1>
								{/* {settings.totalWeight} */}

								{totalWeight.totalWeightadded}

								{unitLabel}
							</h1>

							<button
								// @click="resetTotalWeight"
								className="btn btn-secondary btn-danger btn-sm">
								<FontAwesomeIcon icon={faUndo} />
							</button>
						</nav>
					</div>
				</div>
				<div className="app-container">
					<h5>{textContent.unitsHeadline}</h5>

					<div
						className="unit-group"
						role="group"
						aria-label="Pounds or Kilos">
						{unitItems.map((unit) => (
							<Unit
								handleUnitChange={handleUnitChange}
								key={unit.unitLabel}
								unitLabel={unit.unitLabel}
								name={unit.name}
								id={unit.id}
								defaultChecked={unit.defaultChecked}
								disabled={unit.disabled}
							/>
						))}
					</div>
					<h5>{textContent.barbellHeadline}</h5>
					{/* <p v-if="settings.barbellError" className="error">
					{ textContent.barbellErrorText }
					</p> */}
					<div className="form-group">
						<ul className="barbells">
							<div
								className="barbell-group"
								role="group"
								aria-label="Select barbell weight">
								{barbellDataType.map((barbell) => (
									<Barbell
										handleBarbellChange={
											handleBarbellChange
										}
										key={barbell.id}
										unitLabel={barbell.unitLabel}
										name={barbell.name}
										id={barbell.id}
										defaultChecked={barbell.defaultChecked}
										weight={barbell.weight}
										barbellUnitLabel={
											barbell.barbellUnitLabel
										}
										disabled={barbell.disabled}
									/>
								))}
							</div>
						</ul>
					</div>

					<h5>{textContent.platesHeadline}</h5>

					<div className="form-group">
						<ul className="plates large-plates">
							{largePlateType.map((plate, index) => (
								<Plate
									handlePlateAdd={() =>
										handlePlateAdd(index, "large")
									}
									plateClasses={plate.plateClasses}
									key={index}
									weight={plate.weight}
									weightLabel={plate.weightLabel}
								/>
							))}
						</ul>

						<ul className="plates small-plates">
							{smallPlateType.map((plate, index) => (
								<Plate
									handlePlateAdd={() =>
										handlePlateAdd(index, "small")
									}
									plateClasses={plate.plateClasses}
									key={index}
									weight={plate.weight}
									weightLabel={plate.weightLabel}
								/>
							))}
						</ul>
					</div>
				</div>
			</main>
			<footer>
				<nav className="navbar navbar-dark">
					<div className="app-container">
						<p className="credits">
							<span
								dangerouslySetInnerHTML={{
									__html: textContent.madeWidth,
								}}></span>
							<FontAwesomeIcon icon={["fab", "react"]} />
							<a
								href="https://github.com/nikibrown/react-barbell-calculator"
								target="_blank"
								rel="noopener noreferrer">
								<FontAwesomeIcon icon={["fab", "github"]} />
							</a>
						</p>
					</div>
				</nav>
			</footer>
		</div>
	);
};

export default Calculator;
