import mongoose from "mongoose";

const Schema = mongoose.Schema;

const totalDebtServiceSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Total_Debt_Service" }
);

const TotalDebtService = mongoose.model(
	"Total_Debt_Service",
	totalDebtServiceSchema
);

export default TotalDebtService;
