/** @format */

import {React, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {Chart} from "react-google-charts";
import {yearLabels} from "./utils.py/constants";
import {API_ENDPOINT} from "./utils.py/config";
import axios from "axios";

const LineGraph = ({selectedStage}) => {
	const [graphData, setGraphData] = useState([]);
	const options = {
		title: selectedStage.indicator,
	};

	const getGraphData = async () => {
		const response = await axios.get(
			`${API_ENDPOINT}fetch-time-series?collection=${selectedStage.indicator}&startYear=1960&endYear=2020&country=IND`
		);

		let newGraphData = [["Year", "Value"]];
		for (let i = 0; i < response.data.length; i++) {
			newGraphData.push([response.data[i].year, response.data[i].value]);
		}
		setGraphData(newGraphData);
	};
	useEffect(() => {
		getGraphData();
	}, []);

	return (
		<div className="content-wrapper">
			<Chart
				chartType="LineChart"
				width="100%"
				height="400px"
				data={graphData}
				options={options}
			/>
		</div>
	);
};

export default LineGraph;
