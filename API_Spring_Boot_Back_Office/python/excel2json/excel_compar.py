import pandas
import sys
import http.client
import mimetypes

import pandas as pd


file1="ECF_E1_Entreprises_CTNDEV_Mai_2018.xls"
file2="./new/"+file1

print(file1)
toRead=[]
#================what we will read===================
xls = pd.ExcelFile(file1)
sheets = xls.book.sheets()
for sheet in sheets:
    # print(sheet.name, sheet.visibility)
    if(sheet.visibility==0):
        toRead.append(sheet.name)
print(toRead)
#===================================================
page1="{}"
page2="{}"
page3="{}"

try:
    page1 = pandas.read_excel(file1, sheet_name=toRead[0]).applymap(str).to_json(orient='split')
except:
    print("no page 1 in this excel")

try:
    page2 = pandas.read_excel(file1, sheet_name=toRead[1]).applymap(str).to_json(orient='split')
except:
    print("no page 2 in this excel")

try:
    page3 = pandas.read_excel(file1, sheet_name=toRead[2]).applymap(str).to_json(orient='split')
except:
    print("no page 3 in this excel")

print(file2)
toRead=[]
#================what we will read===================
xls = pd.ExcelFile(file2)
sheets = xls.book.sheets()
for sheet in sheets:
    # print(sheet.name, sheet.visibility)
    if(sheet.visibility==0):
        toRead.append(sheet.name)
print(toRead)
#===================================================
page1_f2="{}"
page2_f2="{}"
page3_f2="{}"

try:
    page1_f2 = pandas.read_excel(file2, sheet_name=toRead[0]).applymap(str).to_json(orient='split')
except:
    print("no page 1 in this excel")

try:
    page2_f2 = pandas.read_excel(file2, sheet_name=toRead[1]).applymap(str).to_json(orient='split')
except:
    print("no page 2 in this excel")

try:
    page3_f2 = pandas.read_excel(file2, sheet_name=toRead[2]).applymap(str).to_json(orient='split')
except:
    print("no page 3 in this excel")
print("================================= comparaison =============================")
print("page1: "+str(page1==page1_f2))
print()
print("page2: "+str(page2==page2_f2))
print()
print("page3: "+str(page3==page3_f2))
print("================================= Final result =============================")
print("is the same file: "+str(page1==page1_f2 and page2==page2_f2 and page3==page3_f2))
print()
print("Done...")
print("-------------")
print(str(page1_f2==page2_f2))
if(page1_f2==page2_f2):
    exit()
import json
page1 = json.loads(page1_f2)
page2 = json.loads(page2_f2)
for i in range(len(page1["columns"])):
    if (page1["columns"][i]!=page2["columns"][i]):
        print("->diff here : page1: "+page1["columns"][i]+" || page2: "+page2["columns"][i])
    for j in range(len(page1["index"])):
        if page1["data"][i][j]!=page2["data"][i][j]:
            print("->diff here ("+str(j)+","+str(i)+"): page1: "+page1["data"][j][i]+" || page2: "+page2["data"][j][i])
