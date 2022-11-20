/** @format */

import {React, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {Chart} from "react-google-charts";
import {yearLabels} from "./utils.py/constants";
import {API_ENDPOINT} from "./utils.py/config";
import axios from "axios";
import {indicatorMappings} from "./utils.py/constants";

const LineGraph = ({country, selectedStage, sliderValue}) => {
	const [graphData, setGraphData] = useState([]);
	const options = {
		title: selectedStage.indicator,
		title: indicatorMappings
			.find((x) => x.key === selectedStage.category)
			.indicators.find((x) => x.key === selectedStage.indicator).text,
	};

	const getGraphData = async () => {
		const response = await axios.get(
			`${API_ENDPOINT}fetch-time-series?collection=${selectedStage.indicator}&startYear=${sliderValue[0]}&endYear=${sliderValue[1]}&country=${country}`
		);
		console.log("API response: " + JSON.stringify(response.data));
		let newGraphData = [["Year", "Value"]];
		for (let i = 0; i < response.data.length; i++) {
			newGraphData.push([response.data[i].year, response.data[i].value]);
		}
		setGraphData(newGraphData);
	};
	useEffect(() => {
		getGraphData();
	}, [country, selectedStage, sliderValue]);

	console.log("Rendering LineGraph");
	console.log("Country: " + country);
	console.log("Selected stages: " + JSON.stringify(selectedStage));
	console.log("Graph data" + JSON.stringify(graphData));
	return (
		<div className="content-wrapper">
			{graphData.length ? (
				<Chart
					chartType="LineChart"
					width="100%"
					height="400px"
					data={graphData}
					options={options}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default LineGraph;
