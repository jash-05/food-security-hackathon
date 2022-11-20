import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fertilizerConsumptionSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Fertilizer_Consumption" }
);

const FertilizerConsumption = mongoose.model(
	"Fertilizer_Consumption",
	fertilizerConsumptionSchema
);

export default FertilizerConsumption;
