import mongoose from "mongoose";

const Schema = mongoose.Schema;

const totalReservesMonthsSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Total_Reserves_Months" }
);

const TotalReservesMonths = mongoose.model(
	"Total_Reserves_Months",
	totalReservesMonthsSchema
);

export default TotalReservesMonths;
