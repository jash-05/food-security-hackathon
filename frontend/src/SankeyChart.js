import React from "react";
import { Chart } from "react-google-charts";

const SankeyChart = (props) => {
	const importData = props.data;
	const source = props.country;

	let sortedImportData = [];
	for (var country in importData) {
		sortedImportData.push([country, importData[country]]);
	}

	sortedImportData.sort(function (a, b) {
		return b[1] - a[1];
	});

	console.log(sortedImportData);

	let sankeyData = [["From", "To", "Weight"]];

	for (let i = 0; i < sortedImportData.length; i++) {
		const destination = sortedImportData[i][0];
		const percentageImported = sortedImportData[i][1];
		if (percentageImported === 0) {
			continue;
		}
		sankeyData.push([source, destination, percentageImported]);
	}

	const options = {};

	return (
		<Chart
			chartType="Sankey"
			width="700px"
			height="500px"
			data={sankeyData}
			options={options}
		/>
	);
};

export default SankeyChart;
