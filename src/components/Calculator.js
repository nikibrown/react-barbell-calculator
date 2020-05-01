import React, { useState } from "react";
import "../assets/scss/global.scss";
import { textContent } from "../assets/data/textContent";
import { settings } from "../assets/data/settings";
// import { unitItems } from "../assets/data/units";
// import { barbellItems } from "../assets/data/barbells";
// import { smallPlates, largePlates } from "../assets/data/plates";

import Unit from "./Unit";
import Barbell from "./Barbell";
// import Plate from "./Plate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle, faUndo } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faInfoCircle, faUndo);

const unitItems = [
	{
		bsClasses: "btn btn-md btn-secondary unit-pounds",
		unitLabel: "Pounds",
		selected: true,
		isDisabled: true,
		name: "unit-radio-selection",
		id: "unit-radio-selection-pounds",
		defaultChecked: true,
	},
	{
		foo: "foobar2",
		bsClasses: "btn btn-md btn-secondary unit-kilos",
		unitLabel: "Kilos",
		selected: false,
		isDisabled: true,
		name: "unit-radio-selection",
		id: "unit-radio-selection-kilos",
		isChecked: false,
	},
];

const barbellItemsPounds = [
	{
		weight: 45,
		barbellUnitLabel: "lb",
		id: "barbell-pounds-45",
		name: "barbell-radio-selection",
		defaultChecked: true,
	},
	{
		weight: 35,
		barbellUnitLabel: "lb",
		id: "barbell-pounds-35",
		name: "barbell-radio-selection",
		defaultChecked: false,
	},
	{
		weight: 15,
		barbellUnitLabel: "lb",
		id: "barbell-pounds-15",
		name: "barbell-radio-selection",
		defaultChecked: false,
	},
];

const barbellItemsKilos = [
	{
		weight: 20,
		barbellUnitLabel: "kg",
		id: "barbell-kilos-20",
		name: "barbell-radio-selection",
		defaultChecked: false,
	},
	{
		weight: 15,
		barbellUnitLabel: "kg",
		id: "barbell-kilos-15",
		name: "barbell-radio-selection",
		defaultChecked: false,
	},
	{
		weight: 6.8,
		barbellUnitLabel: "kg",
		id: "barbell-kilos-6-8",
		name: "barbell-radio-selection",
		defaultChecked: false,
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
	};

	// logic for unitLabel/barbell data switching

	let unitLabel;
	let barbellDataType;
	if (unitSelection.selectedUnit === "Pounds") {
		unitLabel = <span className="total-weight-pounds">lb</span>;
		barbellDataType = barbellItemsPounds;
	} else {
		unitLabel = <span className="total-weight-kilos">kg</span>;
		barbellDataType = barbellItemsKilos;
	}

	// state for barbells

	const [barbellSelection, setBarbellSelection] = useState({
		selectedBarbell: 45,
	});

	const handleBarbellChange = (changeEvent) => {
		setBarbellSelection({
			...barbellSelection,
			selectedBarbell: changeEvent.target.value,
		});
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
								{settings.totalWeight}

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
									/>
								))}
							</div>
						</ul>
					</div>

					<h5>{textContent.platesHeadline}</h5>

					{/* <div className="form-group">
						<ul className="plates large-plates">
							{largePlates.map((plate) => (
								<Plate
									bsClasses={plate.bsClasses}
									isOnBarbell={plate.isOnBarbell}
									key={plate.poundWeight}
									kiloWeight={plate.kiloWeight}
									plateCount={plate.plateCount}
									poundWeight={plate.poundWeight}
								/>
							))}
						</ul>

						<ul className="plates small-plates">
							{smallPlates.map((plate) => (
								<Plate
									bsClasses={plate.bsClasses}
									isOnBarbell={plate.isOnBarbell}
									key={plate.poundWeight}
									kiloWeight={plate.kiloWeight}
									plateCount={plate.plateCount}
									poundWeight={plate.poundWeight}
								/>
							))}
						</ul>
					</div> */}
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
								href="https://github.com/nikibrown/vue-barbell-calculator"
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
