import mongoose from "mongoose";

const Schema = mongoose.Schema;

const debtServiceSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Debt_Service" }
);

const DebtService = mongoose.model("Debt_Service", debtServiceSchema);

export default DebtService;
