import AgriForestryFishing from "../models/agriForestryFishing.js";
import AgriculturalContribution from "../models/agriculturalContribution.js";
import CurrentaAccountBalance from "../models/currentAccountBalance.js";
import DebtService from "../models/debtService.js";
import FdiNet from "../models/fdiNet.js";
import FdiNetInflows from "../models/fdiNetInflows.js";
import FdiNetOutflows from "../models/fdiNetOutflows.js";
import FdiNetOutflowsPercent from "../models/fdiNetOutflowsPercent.js";
import FertilizerConsumption from "../models/fertilizerConsumption.js";
import FertilizerConsumptionPercentage from "../models/fertilizerConsumptionPercentage.js";
import GdpCurrentUsd from "../models/gdpCurrentUsd.js";
import GdpGrowthRate from "../models/gdpGrowthRate.js";
import Gni from "../models/gni.js";
import Manufacturing from "../models/manufacturing.js";
import TotalDebtService from "../models/totalDebtService.js";
import TotalReservesGold from "../models/totalReservesGold.js";
import TotalReservesMonths from "../models/totalReservesMonths.js";
import TotalReservesPercent from "../models/totalReservesPercent.js";
import { ObjectId } from "bson";
import CurrentAccountBalance from "../models/currentAccountBalance.js";

export class FetchTimeSeriesData {
	fetchTimeSeriesData = async (req, res) => {
		console.log(req.query);

		const collection = req.query.collection;
		const startYear = parseInt(req.query.startYear);
		const endYear = parseInt(req.query.endYear);
		const country = req.query.country;

		try {
			if (collection == "Agri_Forestry_Fishing") {
				const response = await AgriForestryFishing.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Agricultural_Contribution") {
				const response = await AgriculturalContribution.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Current_Account_Balance") {
				const response = await CurrentAccountBalance.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Debt_Service") {
				const response = await DebtService.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "FDI_Net") {
				const response = await FdiNet.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "FDI_Net_Inflows") {
				const response = await FdiNetInflows.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "FDI_Net_Outflows") {
				const response = await FdiNetOutflows.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "FDI_Net_Outflows_Percent") {
				const response = await FdiNetOutflowsPercent.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Fertilizer_Consumption") {
				const response = await FertilizerConsumption.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Fertilizer_Consumption_Percentage") {
				const response = await FertilizerConsumptionPercentage.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "GDP_Current_USD") {
				const response = await GdpCurrentUsd.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "GDP_Growth_Rate") {
				const response = await GdpGrowthRate.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "GNI") {
				const response = await Gni.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Manufacturing") {
				const response = await Manufacturing.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Total_Debt_Service") {
				const response = await TotalDebtService.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Total_Reserves_Gold") {
				const response = await TotalReservesGold.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Total_Reserves_Months") {
				const response = await TotalReservesMonths.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (collection == "Total_Reserves_Percent") {
				const response = await TotalReservesPercent.find({
					year: { $gte: startYear, $lte: endYear },
					country: country,
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			}
		} catch (err) {
			console.error("Error => ", err);
			return res.status(500).send("Could not fetch time series data");
		}
	};
}
