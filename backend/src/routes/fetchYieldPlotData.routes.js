import express from "express";
import { FetchYieldPlotData } from "../controllers/fetchYieldPlotData.controller.js";

const yieldPlotRoutes = express.Router();
const fetchYieldPlotData = new FetchYieldPlotData();

yieldPlotRoutes.get("/fetch-yield-plot", fetchYieldPlotData.fetchYieldPlotData);

export default yieldPlotRoutes;
