import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const PieChart = () => {
  const [labels, setLabels] = useState([]);
  const [pieData, setPieData] = useState([]);
  const getChartData = async () => {
    let newLabels = [];
    let newPieData = [];
    try {
      const res = await axios(
        "http://localhost:3001/fetch-sankey-plot?year=2019&product=Wheat&country=Egypt"
      );
      console.log(res.data);

      for (const [key, value] of Object.entries(res?.data)) {
        newLabels.push(key);
        newPieData.push(value);
      }
      console.log(newLabels);
      setLabels(newLabels);
      setPieData(newPieData);
    } catch (err) {}
  };
  useEffect(() => {
    getChartData();
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Wheat Import Quantity (tonnes)",
        data: pieData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        title: ``,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
