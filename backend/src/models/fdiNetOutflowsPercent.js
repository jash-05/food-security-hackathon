import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fdiNetOutflowsPercentSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "FDI_Net_Outflows_Percent" }
);

const FdiNetOutflowsPercent = mongoose.model(
	"FDI_Net_Outflows_Percent",
	fdiNetOutflowsPercentSchema
);

export default FdiNetOutflowsPercent;
