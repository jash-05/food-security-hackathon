import pymongo
import csv

from config import *

client = pymongo.MongoClient(
    f"mongodb+srv://{USER}:{PASS}@cluster0.xljkdkp.mongodb.net/?retryWrites=true&w=majority", tlsInsecure=True)
db = client["hackathon"]

path = "./../data/imports/imports.csv"

collection = db["Imports"]
data = list(csv.reader(open(path)))
all_documents = []
for row in data[1:]:
    document = {
        'country': row[3],
        'partner_country': row[5],
        'product': row[9],
        'year': int(row[11]),
        'value': int(row[13]) if row[13] else 0
    }
    all_documents.append(document)
# collection.insert_many(all_documents)


def uploadDataForExport(export):
    path = f"./../data/exports/{export}.csv"
    collection = db[export]
    data = list(csv.reader(open(path)))
    all_documents = []
    for row in data[1:]:
        document = {
            'year': int(row[0]),
            'area_harvested': int(row[1]),
            'production': int(row[2]),
            'yield': int(row[3])
        }
        all_documents.append(document)
    collection.insert_many(all_documents)


uploadDataForExport("Philippines_Exports")
uploadDataForExport("Iran_Exports")
