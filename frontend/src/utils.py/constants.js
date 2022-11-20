/** @format */

export const indicatorMappings = [
	{
		eventKey: 0,
		key: "macroeconomic",
		text: "Macroeconomics (USD)",
		indicators: [
			{
				key: "GDP_Growth_Rate",
				text: "GDP growth (annual %)",
			},
			{
				key: "GDP_Current_USD",
				text: "GDP (current US$)",
			},
			{
				key: "Current_Account_Balance",
				text: "Current account balance (% of GDP)",
			},
			{
				key: "FDI_Net",
				text: "Foreign direct investment, net (BoP, current US$)",
			},
			{
				key: "FDI_Net_Outflows",
				text: "Foreign direct investment, net outflows (BoP, current US$)",
			},
			{
				key: "FDI_Net_Inflows",
				text: "Foreign direct investment, net inflows (% of GDP)",
			},
			{
				key: "FDI_Net_Outflows_Percent",
				text: "Foreign direct investment, net outflows (% of GDP)",
			},
		],
	},
	{
		eventKey: 1,
		key: "agricultural",
		text: "Agricultural",
		indicators: [
			{
				key: "Agricultural_Contribution",
				text: "Agricultural Contribution (% GDP)",
			},
			{
				key: "Manufacturing",
				text: "Manufacturing(%GDP)",
			},
			{
				key: "Agri_Forestry_Fishing",
				text: "Agriculture, forestry, and fishing, value added (annual % growth)",
			},
			{
				key: "Fertilizer_Consumption",
				text: "Fertilizer consumption (kilograms per hectare of arable land)",
			},
			{
				key: "Fertilizer_Consumption_Percentage",
				text: "Fertilizer consumption (% of fertilizer production)",
			},
		],
	},
	{
		eventKey: 2,
		key: "debt",
		text: "Debt",
		indicators: [
			{
				key: "Total_Reserves_Months",
				text: "Total reserves in months of imports",
			},
			{
				key: "Total_Reserves_Gold",
				text: "Total reserves (includes gold, current US$)",
			},
			{
				key: "Total_Reserves_Percent",
				text: "Total reserves (% of total external debt)",
			},
			{
				key: "Debt_Service",
				text: "Debt service (PPG and IMF only, % of exports of goods, services and primary income)",
			},
			{
				key: "Total_Debt_Service",
				text: "Total debt service (% of GNI)",
			},
			{
				key: "GNI",
				text: "GNI (current US$)",
			},
		],
	},
	{
		eventKey: 3,
		key: "crops",
		text: "Specialty Crops",
		indicators: [
			{
				key: "banana",
				text: "Bananas",
			},
			{
				key: "mango",
				text: "Mangoes",
			},
			{
				key: "walnut",
				text: "Walnuts",
			},
		],
	},
	{
		eventKey: 4,
		key: "imports",
		text: "Imports",
		indicators: [
			{
				key: "Saudi Arabia",
				text: "Saudi Arabia Imports",
			},
			{
				key: "Egypt",
				text: "Egypt Imports",
			},
		],
	},
	{
		eventKey: 5,
		key: "yield",
		text: "Yield",
		indicators: [
			{
				key: "Iran",
				text: "Iran Exports",
			},
			{
				key: "Philippines",
				text: "Philippines Exports",
			},
		],
	},
];

export const yearLabels = [
	{
		value: 1960,
		label: 1960,
	},
	{
		value: 1970,
		label: 1970,
	},
	{
		value: 1980,
		label: 1980,
	},
	{
		value: 1990,
		label: 1990,
	},
	{
		value: 2000,
		label: 2000,
	},
	{
		value: 2010,
		label: 2010,
	},
	{
		value: 2021,
		label: 2021,
	},
];

export const countryMapping = {
	USA: "us",
	IND: "in",
	CHN: "cn",
};
