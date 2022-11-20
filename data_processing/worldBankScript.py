import pymongo
import csv

from config import *

client = pymongo.MongoClient(
    f"mongodb+srv://{USER}:{PASS}@cluster0.xljkdkp.mongodb.net/?retryWrites=true&w=majority", tlsInsecure=True)
db = client["hackathon"]

indicators = {
    'macroeconomic': [
        "GDP_Growth_Rate",
        "GDP_Current_USD",
        "FDI_Net",
        "FDI_Net_Outflows",
        "FDI_Net_Outflows_Percent",
        "FDI_Net_Inflows",
        "Current_Account_Balance",
    ],
    'agricultural': [
        "Fertilizer_Consumption",
        "Manufacturing",
        "Fertilizer_Consumption_Percentage",
        "Agricultural_Contribution",
        "Agri_Forestry_Fishing"
    ],
    'debt': [
        "Debt_Service",
        "GNI",
        "Total_Debt_Service",
        "Total_Reserves_Gold",
        "Total_Reserves_Months",
        "Total_Reserves_Percent"
    ]
}

base_path = "./../data/"
indicator = 'GDP_Growth_Rate'

country_codes = [
    "IND",
    "USA",
    "CHN"
]

for folder in indicators:
    print(f"Reached folder: {folder}")
    path = f"{base_path}{folder}/"
    for indicator in indicators[folder]:
        print(f"Reached indicator: {indicator}")
        collection = db[indicator]
        full_path = f"{path}{indicator}.csv"
        data = list(csv.reader(open(full_path)))
        index = data[4]
        all_documents = []
        for row in data:
            if len(row) > 0 and row[1] in country_codes:
                print(row[0])
                for i in range(4, len(row) - 1):
                    document = {
                        'year': int(index[i]),
                        'value': float(row[i]) if row[i] else 0.0,
                        'country': row[1]
                    }
                    all_documents.append(document)
        collection.insert_many(all_documents)
