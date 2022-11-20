/** @format */
import {React, useEffect} from "react";
import Imports from "./Imports";
import LineGraph from "./LineGraph";
import YearSlider from "./YearSlider";

const Stage = ({country, selectedStages, sliderValue, handleSliderChange}) => {
	useEffect(() => {
		console.log("ONLY ONCE");
	}, []);

	console.log("Rendering Stage");
	console.log("Country: " + JSON.stringify(country));
	console.log("Selected stages: " + JSON.stringify(selectedStages));
	return (
		<div className="content-wrapper">
			<YearSlider sliderValue={sliderValue} handleSliderChange={handleSliderChange} />
			<Imports country={country} />
			{selectedStages.map((selectedStage) => {
				return (
					<LineGraph
						country={country}
						selectedStage={selectedStage}
						sliderValue={sliderValue}
					/>
				);
			})}
		</div>
	);
};

export default Stage;
