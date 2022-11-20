import mongoose from "mongoose";

const Schema = mongoose.Schema;

const totalReservesGoldSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Total_Reserves_Gold" }
);

const TotalReservesGold = mongoose.model(
	"Total_Reserves_Gold",
	totalReservesGoldSchema
);

export default TotalReservesGold;
