/** @format */
import {React} from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {yearLabels} from "./utils.py/constants";

const YearSlider = ({sliderValue, handleSliderChange}) => {
	return (
		<div className="content-wrapper">
			<Box sx={{width: 700, marginLeft: "auto", marginRight: "auto", marginTop: "30px"}}>
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
		</div>
	);
};

export default YearSlider;
