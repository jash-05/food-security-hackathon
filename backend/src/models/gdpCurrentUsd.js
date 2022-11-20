import mongoose from "mongoose";

const Schema = mongoose.Schema;

const gdpCurrentUsdSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "GDP_Current_USD" }
);

const GdpCurrentUsd = mongoose.model("GDP_Current_USD", gdpCurrentUsdSchema);

export default GdpCurrentUsd;
