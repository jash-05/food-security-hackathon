import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fdiNetOutflowsSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "FDI_Net_Outflows" }
);

const FdiNetOutflows = mongoose.model("FDI_Net_Outflows", fdiNetOutflowsSchema);

export default FdiNetOutflows;
