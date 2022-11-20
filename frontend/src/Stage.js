import Imports from "./Imports";
import { React, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Stage = ({ selectedStage }) => {
  console.log(selectedStage);
  const [sliderValue, setSliderValue] = useState([1960, 2021]);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  console.log(sliderValue);
  const marks = [
    {
      value: 1960,
      label: 1960,
    },
    {
      value: 1970,
      label: 1970,
    },
    {
      value: 1980,
      label: 1980,
    },
    {
      value: 1990,
      label: 1990,
    },
    {
      value: 2000,
      label: 2000,
    },
    {
      value: 2010,
      label: 2010,
    },
    {
      value: 2021,
      label: 2021,
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div className="content-wrapper">
      <Imports />
      <Box sx={{ width: 700 }}>
        <Slider
          getAriaLabel={() => "Year range"}
          value={sliderValue}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          step={1}
          min={1960}
          max={2021}
          marks={marks}
          getAriaValueText={valuetext}
        />
      </Box>
    </div>
  );
};

export default Stage;
