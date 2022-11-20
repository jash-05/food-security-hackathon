import IranExports from "../models/iranExports.js";
import PhilippinesExports from "../models/PhilippinesExports.js";

export class FetchYieldPlotData {
	fetchYieldPlotData = async (req, res) => {
		const startYear = parseInt(req.query.startYear);
		const endYear = parseInt(req.query.endYear);
		const country = req.query.country;

		try {
			if (country == "Philippines") {
				const response = await PhilippinesExports.find({
					year: { $gte: startYear, $lte: endYear },
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			} else if (country == "Iran") {
				const response = await IranExports.find({
					year: { $gte: startYear, $lte: endYear },
				});
				console.log(JSON.stringify(response));
				return res.status(200).send(response);
			}
		} catch (err) {
			console.error("Error => ", err);
			return res.status(500).send("Could not fetch yield data");
		}
	};
}
