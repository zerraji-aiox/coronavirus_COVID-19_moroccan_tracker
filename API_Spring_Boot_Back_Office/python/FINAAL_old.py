#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np 
import datetime
import sys

def the_since_last_death(inputcsv_Deaths, country):
	df = pd.read_csv (inputcsv_Deaths)
	del df["Province/State"]
	del df["Lat"]
	del df["Long"]

	for indice_of_country in range(len(df)):
		if df['Country/Region'][indice_of_country] == country :
			break

	del df["Country/Region"]
	colonne_country = df.loc[indice_of_country,]
	colonne =[]
	for day in range(len(colonne_country)):
			colonne.append(colonne_country[day])
	value_last_day = colonne[len(colonne)-1]
    
	i = 0
	while(value_last_day == colonne[len(colonne)-1-i] ) : 
		i+=1
        
	if i == 0 : i = 1
	elif i > 4 : i = 4
	return(i)

def the_since_last_death_list(inputcsv_Deaths, country):
	df = pd.read_csv (inputcsv_Deaths)
	del df["Province/State"]
	del df["Lat"]
	del df["Long"]

	for indice_of_country in range(len(df)):
		if df['Country/Region'][indice_of_country] == country :
			break

	del df["Country/Region"]
	colonne_country = df.loc[indice_of_country,]
	colonne =[]
        
	sld = []
    
	for k in range(len(colonne_country)):
		colonne =[]
		for day in range(len(colonne_country)-k):
				colonne.append(colonne_country[day])
		value_last_day = colonne[len(colonne)-1]
		
		i = 0
		while(value_last_day == colonne[len(colonne)-1-i]): 
			i+=1
			if value_last_day == 0 : break 
                
		sld.append(i)
	sld.reverse()
    
	for i in range(len(sld)):
		if sld[i] == 0 : sld[i] = 1
		elif sld[i] > 4 : sld[i] = 4
    
	return(sld)


def true_cases( deaths,doubling_time,day,fatality_rate=0.87,days_to_death=17.3):
    tcases_0=round((deaths/fatality_rate*100)*2**(days_to_death/doubling_time),2)
    if day == 0:
            tcases=tcases_0
    else:
            tcases=round(tcases_0*2**(day/doubling_time),2)
    return(tcases)

def Calcule_taux(nombre, A):
    Region =[
    "Tanger-Tétouan-Al Hoceïma",
    "Oriental",
    "Fès-Meknès",
    "Rabat-Salé-Kénitra",
    "Béni Mellal-Khénifra",
    "Casablanca-Settat",
    "Marrakech-Safi",
    "Drâa-Tafilalet",
    "Souss-Massa",
    "Guelmim-Oued Noun",
    "Laâyoune-Sakia El Hamra",
    "Dakhla-Oued Ed-Dahab"
    ]
    
    colonne_Increase_number = []
    colonne_confirmed_maroc = []
    colonne_date = []
    colonne_Rate_Increase = []
    nb_cas_estime = []
    
        
    df = pd.read_excel (r'./DATA2.xlsx')
    cof = list(df['Cof'])
    Date = list(df['date'])
    
    Date = list(df['date'])
    today = datetime.date.today()
    index = 0
    today = datetime.date.today()
    for i in range(len(Date)):
        if str(today) == str(Date[i]).split(' ')[0]:
            index = i+1
            break

    colonne_confirmed_maroc.append(nombre)
    colonne_Increase_number.append(0)
    colonne_Rate_Increase.append(0)
        
    for j in range(31):
        today = datetime.date.today()
        date = today + datetime.timedelta(days = j)
        colonne_date.append(str(date))
        
    for j in range(1,31):
        confirmed = colonne_confirmed_maroc[j-1]*(1+cof[index-1 + j])
        colonne_confirmed_maroc.append(confirmed)
        
    for j in range(30):
        colonne_Rate_Increase.append(cof[j+index])
        
    for i in range(31):
        day = the_since_last_death(r'./time_series_19-covid-Deaths.csv', "Morocco")
        nb_cas_estime.append(np.floor (true_cases(colonne_confirmed_maroc[i]*0.039, 3.5, day ,fatality_rate=0.87,days_to_death=17.3)))
    
        
    text='['
    for i in range(31):
        if i == 30:
            text+='{"date":"'+colonne_date[i]+'","nb_cas_confirme":'+str(colonne_confirmed_maroc[i])+',"increase_rate":'+str(colonne_Rate_Increase[i])+',"nb_cas_estime":'+str(nb_cas_estime[i])+'}\n'
              
        else:
            text+='{"date":"'+colonne_date[i]+'","nb_cas_confirme":'+str(colonne_confirmed_maroc[i])+',"increase_rate":'+str(colonne_Rate_Increase[i])+',"nb_cas_estime":'+str(nb_cas_estime[i])+'},\n'
            
    text+=']'
    
    file_path = "base_donnees.json"
    with open(file_path, 'w') as file:
        file.write('')
    with open(file_path, 'a') as file:
        file.write(text)
    
    for j in range(len(Region)): 
            a=nombre
            b=A[j]
            text='['
            for i in range(1,31):
                confirmed = colonne_confirmed_maroc[i-1]*(1+cof[index-1 + i])*(b/a)
                b=confirmed
                a=colonne_confirmed_maroc[i]
                if i == 30:
                    text+='{"date":"'+colonne_date[i]+'","nb_cas_confirme":'+str(confirmed)+',"increase_rate":'+str(colonne_Rate_Increase[i])+',"nb_cas_estime":'+str((b/a)*nb_cas_estime[i])+'}\n'
                else:
                    text+='{"date":"'+colonne_date[i]+'","nb_cas_confirme":'+str(confirmed)+',"increase_rate":'+str(colonne_Rate_Increase[i])+',"nb_cas_estime":'+str((b/a)*nb_cas_estime[i])+'},\n'
            
            text+=']'
            
            file_path ="./"+Region[j]+".json"
            with open(file_path, 'w') as file:
                file.write('')
            with open(file_path, 'a') as file:
                file.write(text)
                
    return   


# In[2]:


Calcule_taux( int( sys.argv[1]), [int( sys.argv[2]),int( sys.argv[3]),int( sys.argv[4]),int( sys.argv[5]),int( sys.argv[6]),int( sys.argv[7]),int( sys.argv[8]),int( sys.argv[9]),int( sys.argv[10]),int( sys.argv[11]),int( sys.argv[12]),int( sys.argv[13])])


# In[ ]:




