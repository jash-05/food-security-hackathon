import mongoose from "mongoose";

const Schema = mongoose.Schema;

const importsSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
		partner_country: { type: String },
		product: { type: String },
	},
	{ collection: "Imports" }
);

const Imports = mongoose.model("Imports", importsSchema);

export default Imports;
