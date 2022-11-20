import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const YearSlider = () => {
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Year range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1960}
        max={2021}
      />
    </Box>
  );
};

export default YearSlider;
