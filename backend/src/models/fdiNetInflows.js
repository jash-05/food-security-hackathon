import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fdiNetInflowsSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "FDI_Net_Inflows" }
);

const FdiNetInflows = mongoose.model("FDI_Net_Inflows", fdiNetInflowsSchema);

export default FdiNetInflows;
