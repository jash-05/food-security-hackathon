/** @format */

import React, {useEffect, useState} from "react";
import {Chart} from "react-google-charts";
import {API_ENDPOINT} from "./utils.py/config";
import axios from "axios";
import Box from "@mui/material/Box";

const Yield = ({sliderValue, selectedStage}) => {
	const [areaData, setAreaData] = useState([]);
	const [yieldData, setYieldData] = useState([]);

	const getData = async () => {
		const response = await axios.get(
			`${API_ENDPOINT}fetch-yield-plot?startYear=${sliderValue[0]}&endYear=${sliderValue[1]}&country=${selectedStage.indicator}`
		);
		console.log(response.data);
		let newAreaData = [["Year", "Production (tonnes)", "Area Harvested (ha)"]];
		let newYieldData = [["Year", "Production (tonnes)", "Yield (kgs/hectare)"]];
		for (let i = 0; i < response.data.length; i++) {
			newAreaData.push([
				response.data[i].year.toString(),
				response.data[i].production,
				response.data[i].area_harvested,
			]);
			newYieldData.push([
				response.data[i].year.toString(),
				response.data[i].production,
				response.data[i].yield,
			]);
		}
		setAreaData(newAreaData);
		setYieldData(newYieldData);
	};
	const createChart = (chartType) => {
		let title;
		if (selectedStage.indicator === "Iran") {
			if (chartType === "area") {
				title =
					"Iran (Islamic Republic Of) - Walnuts, in shell, Production (tonnes) and Area Harvested (hectare)";
			} else {
				title =
					"Iran (Islamic Republic Of) - Walnuts, in shell, Production (tonnes) and Yield (kgs/hectare)";
			}
		} else {
			if (chartType === "area") {
				title = "Philippines Mango Production - Area Harvested & Production";
			} else {
				title = "Philippines Mango Production - Area Harvested & Yield";
			}
		}
		const options = {
			title,
			series: {
				0: {
					axis: "leftY",
				},
				1: {
					axis: "rightY",
				},
			},
			axes: {
				y: {
					leftY: {
						label: "Tonnes",
					},
					rightY: {
						label: chartType === "area" ? "Area Harvested (ha)" : "Yield (kgs/hectare)",
					},
				},
			},
			legend: {position: "bottom"},
		};
		return (
			<Chart
				chartType="Line"
				width="100%"
				height="400px"
				data={chartType === "area" ? areaData : yieldData}
				options={options}
			/>
		);
	};
	useEffect(() => {
		getData();
	}, [sliderValue, selectedStage]);
	return (
		<Box sx={{mx: 20}}>
			{createChart("area")}
			{createChart("yield")}
		</Box>
	);
};

export default Yield;
