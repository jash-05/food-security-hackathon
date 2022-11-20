import mongoose from "mongoose";

const Schema = mongoose.Schema;

const agriculturalContributionSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Agricultural_Contribution" }
);

const AgriculturalContribution = mongoose.model(
	"Agricultural_Contribution",
	agriculturalContributionSchema
);

export default AgriculturalContribution;
