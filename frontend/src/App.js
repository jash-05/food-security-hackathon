/** @format */

import "./App.css";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import Navbar from "./Navbar";
import Stage from "./Stage";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Dnd from "./Dnd";
import {useState} from "react";
import SankeyChart from "./SankeyChart";
import {countries} from "react-circle-flags";
import YearSlider from "./YearSlider";

function App() {
	//handle country navigation
	const [country, setCountry] = useState("USA");
	const [selectedStages, setSelectedStages] = useState([]);
	const [sliderValue, setSliderValue] = useState([1960, 2021]);
	const handleSliderChange = (event, newValue) => {
		setSliderValue(newValue);
	};
	const handleChange = (event) => {
		setCountry(event.target.value);
	};
	const addIndicatorToStage = (category, indicator) => {
		console.log("Adding " + indicator + " to stages: " + selectedStages);
		if (!selectedStages.length) {
			setSelectedStages([
				{
					category,
					indicator,
				},
			]);
		} else if (
			!selectedStages.some((existingIndicator) => existingIndicator.indicator === indicator)
		) {
			if (
				selectedStages.some((existingIndicator) => existingIndicator.category !== category)
			) {
				setSelectedStages([
					{
						category,
						indicator,
					},
				]);
			} else {
				setSelectedStages([
					...selectedStages,
					{
						category,
						indicator,
					},
				]);
			}
		}
	};
	console.log("Rendering APP");
	console.log("Country: " + countries);
	console.log("Selected stages: " + JSON.stringify(selectedStages));
	return (
		// <DndProvider backend={HTML5Backend}>
		<div className="App">
			<Navbar country={country} handleChange={() => handleChange} />
			<div className="body-wrapper">
				<LeftPanel addIndicatorToStage={addIndicatorToStage} />
				<Stage
					country={country}
					selectedStages={selectedStages}
					sliderValue={sliderValue}
					handleSliderChange={handleSliderChange}
				/>
			</div>
			<SankeyChart />
			{/* <Footer /> */}
		</div>
		// </DndProvider>
	);
}

export default App;
