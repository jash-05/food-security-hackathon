/** @format */

import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import SankeyChart from "./SankeyChart";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LineChart from "./LineChart";
import axios from "axios";
import {API_ENDPOINT} from "./utils.py/config";

const Imports = ({ country }) => {
  const [year, setYear] = useState(2020);
  const [product, setProduct] = useState("Wheat");
  const [data, setData] = useState();

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };
  const [labels, setLabels] = useState([]);
  const [pieData, setPieData] = useState([]);

  const getChartData = async () => {
    let newLabels = [];
    let newPieData = [];
    try {
      console.log(year, product, country);
      const res = await axios(
        `${API_ENDPOINT}fetch-sankey-plot?year=${year}&product=${product}&country=${country}`
      );
      console.log(res.data);

      for (const [key, value] of Object.entries(res?.data)) {
        newLabels.push(key);
        newPieData.push(value);
      }
      setData(res.data);
      setLabels(newLabels);
      setPieData(newPieData);
    } catch (err) {
      console.log("Error fetching Sankey Chart data" + err);
    }
  };

  useEffect(() => {
    getChartData();
  }, [country, year, product]);

  return (
    <div className="imports-wrapper">
      <div className="selectors">
        <div className="imports-year-dropdown">
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel sx={{ fontSize: 24 }} id="year-select-label">
                Year
              </InputLabel>
              <Select
                labelId="year"
                id="year-dropdown"
                value={year}
                label="Year"
                onChange={handleYearChange}
                autoWidth
                sx={{ fontSize: 24 }}
              >
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="import-products-dropdown">
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel sx={{ fontSize: 24 }} id="product-select-label">
                Products
              </InputLabel>
              <Select
                labelId="products"
                id="product-dropdown"
                value={product}
                label="Product"
                onChange={handleProductChange}
                sx={{ fontSize: 24 }}
              >
                <MenuItem value={"Wheat"}>Wheat</MenuItem>
                <MenuItem value={"Rice, paddy (rice milled equivalent)"}>
                  Rice
                </MenuItem>
                {/* <MenuItem value={"Corn"}>Corn</MenuItem> */}
                {/* <MenuItem value={"Walnut"}>Walnut</MenuItem> */}
                <MenuItem value={"Bananas"}>Banana</MenuItem>
                {/* <MenuItem value={"Mango"}>Mango</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="imports-charts-wrapper">
        <div className="sankey-chart-wrapper">
          <SankeyChart data={data} country={country} />
        </div>
        <div className="pie-chart-wrapper">
          <PieChart labels={labels} pieData={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Imports;
