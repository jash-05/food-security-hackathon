import express from "express";
import { FetchTimeSeriesData } from "../controllers/fetchTimeSeriesData.controller.js";

const timeSeriesRoutes = express.Router();
const fetchTimeSeriesData = new FetchTimeSeriesData();

timeSeriesRoutes.get(
	"/fetch-time-series",
	fetchTimeSeriesData.fetchTimeSeriesData
);

export default timeSeriesRoutes;
