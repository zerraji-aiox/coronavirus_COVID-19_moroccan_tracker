import pandas
import sys
import http.client
import mimetypes

import pandas as pd


import os
if os.path.exists("result.json"):
  os.remove("result.json")
else:
  print(">>starting")

toRead=[]
#================what we will read===================
xls = pd.ExcelFile(sys.argv[1])
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
    page1 = pandas.read_excel(sys.argv[1], sheet_name=toRead[0]).applymap(str).to_json(orient='split')
except:
    print("no page 1 in this excel")

try:
    page2 = pandas.read_excel(sys.argv[1], sheet_name=toRead[1]).applymap(str).to_json(orient='split')
except:
    print("no page 2 in this excel")

try:
    page3 = pandas.read_excel(sys.argv[1], sheet_name=toRead[2]).applymap(str).to_json(orient='split')
except:
    print("no page 3 in this excel")


payload = "{\n    \"page1\":"+page1+", \"page2\":"+page2+", \"page3\":"+page3+"\n}"

import io
with io.open(sys.argv[1]+'_result.json', 'w', encoding='utf8') as f_out:
    f_out.write(payload)

print("done...")