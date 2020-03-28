#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np 
import datetime 

def Calcule_taux(Lien, Name_paye, nombre):
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
   
    Taux_après = []
    Taux_avant = []
    x1 = []
    x2 = []
    Taux = []
    for i in range(len(colonne_Rate_Increase)):
        if i>6 :
            if colonne_confirmed_maroc[i-nombre] == 0 :
                Taux_avant.append(round(0,2))
                x1.append(colonne_Rate_Increase[i]-Taux_avant[i])
            else :
                Taux_avant.append(round((colonne_Increase_number[i]/colonne_confirmed_maroc[i-nombre])*100,2))
                x1.append(colonne_Rate_Increase[i]-Taux_avant[i])
        else: 
            Taux_avant.append(round(0,2))
            x1.append(colonne_Rate_Increase[i]-Taux_avant[i])
            
        if i < len(colonne_Rate_Increase)-nombre:
            if colonne_confirmed_maroc[i+nombre] == 0 :
                Taux_après.append(round(0,2))
                x2.append(Taux_après[i]-colonne_Rate_Increase[i])
            else :
                Taux_après.append(round((colonne_Increase_number[i]/colonne_confirmed_maroc[i+nombre])*100,2))
                x2.append(Taux_après[i]-colonne_Rate_Increase[i])
        else :
            Taux_après.append(round(0,2)) 
            x2.append(Taux_après[i]-colonne_Rate_Increase[i])
    for i in range (len(x1)):
        Taux.append(x2[i]-x1[i])
    data = pd.DataFrame({'Date':colonne_date,'Number of case':colonne_confirmed_maroc,'Incease number':colonne_Increase_number,'Rate Increase':colonne_Rate_Increase,'rate_of_encrease_this_day':Taux_avant, 'rate_of_encrease_after_7_days':Taux_après, "X1":x1, "X2":x2, "Taux d'Action":Taux})
    return Taux, colonne_date


# In[2]:


def Calcule_taux_action(lien_de_fichier, Name_pays, date_choisie):
    a,c = Calcule_taux(lien_de_fichier, Name_pays, 7)
    for i in range(len(c)):
        if c[i] == date_choisie:
            taux = a[i]
            break
        else :
            taux = 0
    return taux


# In[3]:


dfAction = pd.read_excel (r'ACTION.xlsx')
Taux_final = []
date_taux = []
Pays_taux = list(dfAction['Pays'])
Action_taux = list(dfAction['Action'])

for i in range(len(dfAction['Pays'])):
    Taux_final.append(Calcule_taux_action(r'time_series_19-covid-Confirmed.csv',dfAction['Pays'][i], str(dfAction['date'][i]).split(' ')[0]))
    date_taux.append(str(dfAction['date'][i]).split(' ')[0])
    
df = pd.DataFrame({'Pays':dfAction['Pays'],'Action':dfAction['Action'],'date':dfAction['date'],'Taux_final':Taux_final})
df.to_excel("Resultats_final.xlsx")
text='['
for i in range(len(Taux_final)):
    if i != len(Taux_final)-1:
        text+='{"date":"'+str(date_taux[i])+'","country":"'+str(Pays_taux[i])+'","action":"'+str(Action_taux[i])+'","reduction_rate":'+str(round(Taux_final[i],2))+'},\n'
    else:
        text+='{"date":"'+str(date_taux[i])+'","country":"'+str(Pays_taux[i])+'","action":"'+str(Action_taux[i])+'","reduction_rate":'+str(round(Taux_final[i],2))+'}\n'

text+=']'
file_path = "base_donnees_taux.json"

with open(file_path, 'w') as file:
        file.write('')
with open(file_path, 'a') as file:
        file.write(text)


# In[ ]:


#Calcule_taux(r'time_series_19-covid-Confirmed.csv',"Taiwan*",7)
#Calcule_taux(r'time_series_19-covid-Confirmed.csv',"Morocco",7)
#Calcule_taux_action(r'time_series_19-covid-Confirmed.csv',"Morocco", "2020-03-14")

