import mongoose from "mongoose";

const Schema = mongoose.Schema;

const iranExportsSchema = new Schema(
	{
		year: { type: Number },
		area_harvested: { type: Number },
		production: { type: Number },
		yield: { type: Number },
	},
	{ collection: "Iran_Exports" }
);

const IranExports = mongoose.model("Iran_Exports", iranExportsSchema);

export default IranExports;
