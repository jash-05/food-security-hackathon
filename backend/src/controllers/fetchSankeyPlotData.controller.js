import Imports from "../models/imports.js";

export class FetchSankeyPlotData {
	fetchSankeyPlotData = async (req, res) => {
		console.log(req.query);
		const year = parseInt(req.query.year);
		const country = req.query.country;
		const product = req.query.product;

		try {
			const response = await Imports.find({
				country: country,
				product: product,
				year: year,
			});

			let total_import = 0;
			for (const partner_data of response) {
				const import_val = partner_data["value"];
				total_import += import_val;
			}

			let percentage_share = {};
			for (const partner_data of response) {
				const value_imported_from_partner = partner_data["value"];
				percentage_share[partner_data["partner_country"]] = Math.round(
					(value_imported_from_partner / total_import) * 100
				);
			}

			return res.status(200).send(percentage_share);
		} catch (err) {
			console.error("Error => ", err);
			return res.status(500).send("Could not fetch sankey plot data");
		}
	};
}
