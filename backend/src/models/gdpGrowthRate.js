import mongoose from "mongoose";

const Schema = mongoose.Schema;

const gdpGrowthRateSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "GDP_Growth_Rate" }
);

const GdpGrowthRate = mongoose.model("GDP_Growth_Rate", gdpGrowthRateSchema);

export default GdpGrowthRate;
