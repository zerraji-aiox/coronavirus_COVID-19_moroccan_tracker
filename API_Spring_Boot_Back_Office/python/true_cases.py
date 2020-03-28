#!/usr/bin/env python
# coding: utf-8

# In[3]:


import pandas as pd
import numpy as np 


# inputcsv_Deaths = file csv Deaths update 
# country 


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
 
	return(i-1)

# inputcsv_confirmed = file csv confirmed update  
# country 

def doubbling_time(inputcsv_confirmed, country):
	df = pd.read_csv (inputcsv_confirmed)
	del df["Province/State"]
	del df["Lat"]
	del df["Long"]
	
	for i in range(len(df)):
		if df['Country/Region'][i] == country:
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
				
	return np.mean(moyenne)-1

#deaths=Total deaths as of Today
#doubbling time = How many days does it take for case to double
#day = day you want to compute the true cases: 0 means today, 1 means tomorrow etc
#fatality_rate=fatality rate default value 0.87%
#days to death=How many days does it take for the cases to become deaths? default = 17.3 based on 4 papers


def true_cases( deaths,doubling_time,day,fatality_rate=0.87,days_to_death=17.3): 
    tcases_0=round((deaths/fatality_rate*100)*2**(days_to_death/doubling_time),2)
    if day == 0: 
            tcases=tcases_0
    else:
            tcases=round(tcases_0*2**(day/doubling_time),2)
    return(tcases)

def number_deaths(inputcsv_Deaths, country):
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
	return value_last_day


deaths = number_deaths(r'time_series_19-covid-Deaths.csv', "Morocco")
doubling_time = doubbling_time(r'time_series_19-covid-Confirmed.csv', "Morocco")
the_since_last_death = the_since_last_death(r'time_series_19-covid-Deaths.csv', "Morocco")
true_cases = true_cases( deaths, doubling_time,the_since_last_death,fatality_rate=0.87,days_to_death=17.3)
print(deaths)
print("\n")
print(doubling_time)
print("\n")
print(the_since_last_death)
print("\n")
print(true_cases)


# In[ ]:




