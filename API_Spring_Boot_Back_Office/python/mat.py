# -- coding: latin-1 --
# -- coding: utf-8 --
#!/usr/bin/env python

import sys
import json

nbr_cas = int( sys.argv[1] )
nbr_lits = int( sys.argv[2] )
nbr_cas_estime_par_reg = int( sys.argv[3] )




def detect_level(nbr_cas, nbr_lits, nbr_cas_estime_par_reg):

	reslut = [1,1,1,1]
	res = {}


	if nbr_cas >= (nbr_lits*0.65) and nbr_cas < (nbr_lits*0.9):
		reslut[0]=2
	elif nbr_cas >= (nbr_lits*0.9):
		reslut[0]=3

	if nbr_cas_estime_par_reg > 10000:
		reslut[1]=3
	elif (nbr_cas > 200):
		reslut[1]=2

	if (nbr_cas > 200):
		reslut[2]=2
	if (nbr_cas > 400):
		reslut[3]=3
	elif (nbr_cas > 200):
		reslut[3]=2

	jsonString = [{"subject": "sante", "level": reslut[0]},
	 {"subject": "mobilite", "level": reslut[1]},
		 {"subject": "Economie et Industrie", "level": reslut[2]},
		 {"subject": "Reglementation", "level": reslut[3]}]

	with open('mat.json', 'w') as json_file:
		json.dump(jsonString, json_file)
detect_level(nbr_cas, nbr_lits, nbr_cas_estime_par_reg)


