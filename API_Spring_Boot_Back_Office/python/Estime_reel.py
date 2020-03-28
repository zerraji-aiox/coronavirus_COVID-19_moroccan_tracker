#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np 
import datetime  
def true_cases( deaths,doubling_time,day,fatality_rate=0.87,days_to_death=17.3): 
    tcases_0=round((deaths/fatality_rate*100)*2**(days_to_death/doubling_time),2)
    if day == 0: 
            tcases=tcases_0
    else:
            tcases=round(tcases_0*2**(day/doubling_time),2)
    return(tcases)

def Estimation_true_cases( Lien, Name_paye):
    df = pd.read_csv (Lien )
    del df["Province/State"]
    del df["Lat"]
    del df["Long"]

    for i in range(len(df)):
        if df['Country/Region'][i] == Name_paye:
            break

    del df["Country/Region"]
    colonne_pay = df.loc[i,]
    colonne =[]
    for i in range(len(colonne_pay)):
            colonne.append(colonne_pay[i])

    for i in range(len(colonne)):
        if colonne[i]!= 0 :
            a=i
            b=colonne[i]
            break
    k=0
    moyenne =[]
    for i in range(a,len(colonne)):
        if colonne[i] >= 2*b:
            k = k+1
            if k==1:
                c=i
                b=colonne[i]
            if k > 1:
                moyenne.append(i-c)
                b=colonne[i]
                c=i
    listt= []
    colonne_date= []
    for i in range(30):
        listt.append(true_cases(1, np.mean(moyenne), i))
        today = datetime.date.today()
        date = today + datetime.timedelta(days = i)
        colonne_date.append(str(date))
        
    text='['
    for i in range(len(colonne_date)):
        if i < len(colonne_date)-1:
            text+='{"date":"'+colonne_date[i]+'","true_cases":'+str(listt[i])+'},\n'
        else:
            text+='{"date":"'+colonne_date[i]+'","true_cases":'+str(listt[i])+'}\n'
    text+=']'
    file_path = "base_donnees_true_cases.json"
    with open(file_path, 'w') as file:
        file.write("")
    with open(file_path, 'a') as file:
        file.write(text)
    return listt,colonne_date


# In[2]:


Estimation_true_cases(r'time_series_19-covid-Confirmed.csv', "Morocco")


# In[ ]:




