import React, { useState } from "react";
import PieChart from "./PieChart";
import SankeyChart from "./SankeyChart";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LineChart from "./LineChart";

const Imports = () => {
  const [year, setYear] = useState("");
  const [product, setProduct] = useState("");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <div className="imports-wrapper">
      <LineChart />
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
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
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
                <MenuItem value={"Rice"}>Rice</MenuItem>
                <MenuItem value={"Corn"}>Corn</MenuItem>
                <MenuItem value={"Walnut"}>Walnut</MenuItem>
                <MenuItem value={"Banana"}>Banana</MenuItem>
                <MenuItem value={"Mango"}>Mango</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="imports-charts-wrapper">
        <div className="sankey-chart-wrapper">{/* <SankeyChart /> */}</div>
        <div className="pie-chart-wrapper">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Imports;