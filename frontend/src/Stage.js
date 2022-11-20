/** @format */
import { React, useEffect, useState } from "react";
import Imports from "./Imports";
import LineGraph from "./LineGraph";
import YearSlider from "./YearSlider";
import {Banana} from "./components/banana";
import {Mango} from "./components/mango";
import {Walnut} from "./components/walnut";
import SankeyChart from "./SankeyChart";
import Yield from "./Yield";

const Stage = ({
  persona,
  country,
  selectedStages,
  sliderValue,
  handleSliderChange,
}) => {
  useEffect(() => {
    console.log("ONLY ONCE");
  }, []);

	console.log("Rendering Stage");
	console.log("Country: " + JSON.stringify(country));
	console.log("Selected stages: " + JSON.stringify(selectedStages));
	return (
		<div className="content-wrapper">
			{selectedStages.length ? (
				selectedStages.at(-1).category === "crops" ? (
					selectedStages.at(-1).indicator === "banana" ? (
						<Banana crop={selectedStages.at(-1).indicator} />
					) : selectedStages.at(-1).indicator === "mango" ? (
						<Mango crop={selectedStages.at(-1).indicator} />
					) : (
						<Walnut crop={selectedStages.at(-1).indicator} />
					)
				) : selectedStages.at(-1).category === "imports" ? (
					<Imports country={selectedStages.at(-1).indicator} />
				) : selectedStages.at(-1).category === "yield" ? (
					<>
						<YearSlider
							sliderValue={sliderValue}
							handleSliderChange={handleSliderChange}
						/>
						<Yield sliderValue={sliderValue} selectedStage={selectedStages.at(-1)} />
					</>
				) : (
					<>
						<YearSlider
							sliderValue={sliderValue}
							handleSliderChange={handleSliderChange}
						/>
						{selectedStages.map((selectedStage) => {
							return (
								<LineGraph
									country={country}
									selectedStage={selectedStage}
									sliderValue={sliderValue}
								/>
							);
						})}
					</>
				)
			) : (
				""
			)}
		</div>
	);
};

export default Stage;
