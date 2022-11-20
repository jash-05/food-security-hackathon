import mongoose from "mongoose";

const Schema = mongoose.Schema;

const manufacturingSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Manufacturing" }
);

const Manufacturing = mongoose.model("Manufacturing", manufacturingSchema);

export default Manufacturing;
