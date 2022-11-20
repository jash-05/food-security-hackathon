import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fertilizerConsumptionPercentageSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Fertilizer_Consumption_Percentage" }
);

const FertilizerConsumptionPercentage = mongoose.model(
	"Fertilizer_Consumption_Percentage",
	fertilizerConsumptionPercentageSchema
);

export default FertilizerConsumptionPercentage;
