import express from "express";
import { FetchSankeyPlotData } from "../controllers/fetchSankeyPlotData.controller.js";

const sankeyPlotRoutes = express.Router();
const fetchSankeyPlotData = new FetchSankeyPlotData();

sankeyPlotRoutes.get(
	"/fetch-sankey-plot",
	fetchSankeyPlotData.fetchSankeyPlotData
);

export default sankeyPlotRoutes;
