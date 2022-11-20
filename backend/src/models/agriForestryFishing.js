import mongoose from "mongoose";

const Schema = mongoose.Schema;

const agriForestryFishingSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Agri_Forestry_Fishing" }
);

const AgriForestryFishing = mongoose.model(
	"Agri_Forestry_Fishing",
	agriForestryFishingSchema
);

export default AgriForestryFishing;
