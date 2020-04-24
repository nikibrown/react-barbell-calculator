import React from "react";
import "../assets/scss/global.scss";
import { textContent } from "../assets/data/textContent";
import { settings } from "../assets/data/settings";
import { unitItems } from "../assets/data/units";
import { barbellItems } from "../assets/data/barbells";
import { smallPlates, largePlates } from "../assets/data/plates";

import Unit from "./Unit";
import Barbell from "./Barbell";
import Plate from "./Plate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle, faUndo } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faInfoCircle, faUndo);

const Calculator = (props) => {
	return (
		<div id="app">
			<header id="info">
				{/* <transition name="info"> */}
				<nav className="navbar navbar-dark bg-dark">
					<div className="app-container">
						<p
							dangerouslySetInnerHTML={{
								__html: textContent.moreInfo,
							}}></p>
					</div>
				</nav>
				{/* </transition> */}
			</header>
			<header>
				<nav className="navbar navbar-dark navbar-main">
					<div className="app-container justify-content-between">
						<h1 className="navbar-brand">
							<span className="navbar-brand">
								{textContent.appTitle}
							</span>
						</h1>
						<button className="btn btn-link" type="button">
							{/* <i className="fas fa-info-circle"></i> */}
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
								<span className="total-weight-pounds">lb</span>
								<span className="total-weight-kilos">kg</span>
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
								bsClasses={unit.bsClasses}
								key={unit.unitLabel}
								unitLabel={unit.unitLabel}
								selected={unit.selected}
								isDisabled={unit.isDisabled}
							/>
						))}
					</div>
					<h5>{textContent.barbellHeadline}</h5>
					{/* <p v-if="settings.barbellError" className="error">
					{{ textContent.barbellErrorText }}
				</p> */}
					<div className="form-group">
						<ul className="barbells">
							<div
								className="barbell-group"
								role="group"
								aria-label="Select barbell weight">
								{barbellItems.map((barbell) => (
									<Barbell
										bsClasses={barbell.bsClasses}
										isDisabled={barbell.isDisabled}
										key={barbell.poundWeight}
										kiloWeight={barbell.kiloWeight}
										poundWeight={barbell.poundWeight}
										text={barbell.text}
									/>
								))}
							</div>
						</ul>
					</div>

					<h5>{textContent.platesHeadline}</h5>

					<div className="form-group">
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
							<FontAwesomeIcon icon={["fab", "github"]} />

							<FontAwesomeIcon icon={["fab", "vuejs"]} />
						</p>
					</div>
				</nav>
			</footer>
		</div>
	);
};

export default Calculator;
