#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np 
import datetime 

def Calcule_taux(Lien, Name_paye):
    df = pd.read_csv (Lien)
    del df["Province/State"]
    del df["Lat"]
    del df["Long"]

    for i in range(len(df)):
        if df['Country/Region'][i] == Name_paye:
            break
    del df["Country/Region"]
    
    colonne_confirmed_maroc = list(df.loc[i,])
    colonne_date = list(df.columns)
    colonne_Increase_number = []

    for j in range(len(colonne_confirmed_maroc)):
        if j==0:
            colonne_Increase_number.append(colonne_confirmed_maroc[j])
        else:
            colonne_Increase_number.append( colonne_confirmed_maroc[j]-colonne_confirmed_maroc[j-1] )

    colonne_Rate_Increase = []
    for j in range(len(colonne_confirmed_maroc)):
        if j==0 :
            colonne_Rate_Increase.append(0.0)
        else:
            if colonne_confirmed_maroc[j-1] == 0 :
                colonne_Rate_Increase.append(round(0,2))
            else:
                colonne_Rate_Increase.append(round((colonne_Increase_number[j]/colonne_confirmed_maroc[j-1])*100 ,2))

    for j in range(len(colonne_date)):
        today = datetime.date.today()
        date = today - datetime.timedelta(days = len(colonne_date)-j)
        colonne_date[j] = str(date)
    for j in range(7):
        today = datetime.date.today()
        date = today + datetime.timedelta(days = j)
        colonne_date.append(str(date))
        
    a = len(colonne_Rate_Increase)-1
    colonne_Rate_Increase.append(round(colonne_Rate_Increase[a],2))
    
    for j in range(1,8):
        colonne_confirmed_maroc.append(int((colonne_Rate_Increase[a+j]*colonne_confirmed_maroc[a+j-1]/100) + colonne_confirmed_maroc[a+j-1]))
        colonne_Increase_number.append( colonne_confirmed_maroc[a+j]-colonne_confirmed_maroc[a+j-1] )
        if j!=7:
            if colonne_confirmed_maroc[a+j] == 0 :
                colonne_Rate_Increase.append(round(0,2))
            else:
                colonne_Rate_Increase.append(round((colonne_Increase_number[a+j]/colonne_confirmed_maroc[a+j-1])*100,2))
    text='['
    for i in range(len(colonne_date)):
        if i < len(colonne_date)-1:
            text+='{"date":"'+colonne_date[i]+'","colonne_confirmed_maroc":'+str(colonne_confirmed_maroc[i])+'},\n'
        else:
            text+='{"date":"'+colonne_date[i]+'","colonne_confirmed_maroc":'+str(colonne_confirmed_maroc[i])+'}\n'
    
    text+=']'
    file_path = "base_donnees.json"
    with open(file_path, 'w') as file:
        file.write("")
    with open(file_path, 'a') as file:
        file.write(text)
    
    return


# In[2]:


Calcule_taux(r'time_series_19-covid-Confirmed.csv',"Morocco" )


# In[ ]:




