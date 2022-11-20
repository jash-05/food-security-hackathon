import mongoose from "mongoose";

const Schema = mongoose.Schema;

const totalReservesPercentSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Total_Reserves_Percent" }
);

const TotalReservesPercent = mongoose.model(
	"Total_Reserves_Percent",
	totalReservesPercentSchema
);

export default TotalReservesPercent;
