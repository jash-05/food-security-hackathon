/** @format */

import React, {useState} from "react";
import {CircleFlag} from "react-circle-flags";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {countryMapping} from "./utils.py/constants";

const Navbar = (props) => {
	const {country, handleChange} = props;

	return (
		<div className="top-nav">
			<div className="logo">MacroEconomics</div>
			<div className="heading">Dashboard</div>
			<div className="countries">
				<FormControl sx={{m: 1, width: "150px"}}>
					<InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
					<Select
						labelId="demo-simple-select-autowidth-label"
						id="demo-simple-select-autowidth"
						value={country}
						onChange={handleChange()}
						autoWidth
						label="Country">
						<MenuItem value={"USA"}>USA</MenuItem>
						<MenuItem value={"IND"}>India</MenuItem>
						<MenuItem value={"CHN"}>China</MenuItem>
					</Select>
				</FormControl>
				<CircleFlag countryCode={countryMapping[country]} height={70} />
			</div>
		</div>
	);
};

export default Navbar;
