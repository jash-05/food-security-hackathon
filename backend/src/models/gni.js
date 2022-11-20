import mongoose from "mongoose";

const Schema = mongoose.Schema;

const gniSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "GNI" }
);

const Gni = mongoose.model("GNI", gniSchema);

export default Gni;
