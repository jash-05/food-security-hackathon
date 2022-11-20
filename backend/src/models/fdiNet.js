import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fdiNetSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "FDI_Net" }
);

const FdiNet = mongoose.model("FDI_Net", fdiNetSchema);

export default FdiNet;
