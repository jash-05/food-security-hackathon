import mongoose from "mongoose";

const Schema = mongoose.Schema;

const currentAccountBalanceSchema = new Schema(
	{
		year: { type: Number },
		value: { type: Number },
		country: { type: String },
	},
	{ collection: "Current_Account_Balance" }
);

const CurrentAccountBalance = mongoose.model(
	"Current_Account_Balance",
	currentAccountBalanceSchema
);

export default CurrentAccountBalance;
