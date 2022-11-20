/** @format */
import Imports from "./Imports";
import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Chart } from "react-google-charts";
import { yearLabels } from "./utils.py/constants";
import LineGraph from "./LineGraph";

const Stage = ({ country, selectedStages }) => {
  const [sliderValue, setSliderValue] = useState([1960, 2021]);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];

  const options = {
    title: "Company Performance",
    legend: { position: "bottom" },
  };
  useEffect(() => {
    console.log("ONLY ONCE");
  }, []);

  return (
    <div className="content-wrapper">
      <Box sx={{ width: 700 }}>
        <Slider
          getAriaLabel={() => "Year range"}
          value={sliderValue}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          step={1}
          min={1960}
          max={2021}
          marks={yearLabels}
        />
      </Box>
      <Imports country={country} />
      {selectedStages.map((selectedStage) => {
        return <LineGraph selectedStage={selectedStage} />;
      })}
    </div>
  );
};

export default Stage;
