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
				key: "Fertilizer_Consumption_Percentag",
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
				key: "Debt_Service",
				text: "Total reserves in months of imports",
			},
			{
				key: "GNI",
				text: "Total reserves (includes gold, current US$)",
			},
			{
				key: "Total_Debt_Service",
				text: "Total reserves (% of total external debt)",
			},
			{
				key: "Total_Reserves_Gold",
				text: "Debt service (PPG and IMF only, % of exports of goods, services and primary income)",
			},
			{
				key: "Total_Reserves_Months",
				text: "Total debt service (% of GNI)",
			},
			{
				key: "Total_Reserves_Percent",
				text: "GNI (current US$)",
			},
		],
	},
];
