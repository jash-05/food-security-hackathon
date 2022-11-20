import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { CircleFlag } from "react-circle-flags";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { countryMapping } from "./utils.py/constants";

const Navbar = (props) => {
  const { country, handleChange, persona, handlePersona } = props;

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 30,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(18px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#9afd0f" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 26,
      height: 24,
      borderRadius: 26,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 30 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <div className="top-nav">
      <div className="logo">
        <div style={{ padding: "1px", border: "2px solid black" }}>
          Food Security
        </div>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ fontSize: "12px" }}>
            Food Security<br></br> Researcher
          </Typography>
          <AntSwitch
            checked={persona}
            inputProps={{ "aria-label": "ant design" }}
            onChange={handlePersona()}
          />
          <Typography sx={{ fontSize: "12px" }}>
            Government
            <br /> Agent
          </Typography>
        </Stack>
      </div>
      <div className="heading">Food Security Time Series Dashboard</div>
      <div className="countries">
        {["crops", "imports", "yield"].includes(props.category) ? (
          ""
        ) : (
          <>
            <FormControl sx={{ m: 1, width: "150px" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={country}
                onChange={handleChange()}
                autoWidth
                label="Country"
              >
                <MenuItem value={"USA"}>USA</MenuItem>
                <MenuItem value={"IND"}>India</MenuItem>
                <MenuItem value={"CHN"}>China</MenuItem>
              </Select>
            </FormControl>
            <CircleFlag countryCode={countryMapping[country]} height={70} />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
