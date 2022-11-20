import mongoose from "mongoose";

const Schema = mongoose.Schema;

const philippinesExportsSchema = new Schema(
	{
		year: { type: Number },
		area_harvested: { type: Number },
		production: { type: Number },
		yield: { type: Number },
	},
	{ collection: "Philippines_Exports" }
);

const PhilippinesExports = mongoose.model(
	"Philippines_Exports",
	philippinesExportsSchema
);

export default PhilippinesExports;
