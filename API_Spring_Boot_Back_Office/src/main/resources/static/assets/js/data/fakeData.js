//data pour index.html:
//box1, bubbles data
dataset_bubble = [
    { topic: 'Comportement', frequency: 21, score: 21, polarity: 75.0 },
    { topic: 'General', frequency: 9, score: 9, polarity: 29.0 },
    { topic: 'Service', frequency: 34, score: 34, polarity: 100.0 },
    { topic: 'Banque', frequency: 9, score: 9, polarity: -19.0 },
    { topic: 'Credit', frequency: 3, score: 3, polarity: 4.0 },
    { topic: 'Agence', frequency: 6, score: 6, polarity: -16.0 },
    { topic: 'Personnel', frequency: 11, score: 11, polarity: -42.0 },
    { topic: 'Operations', frequency: 6, score: 6, polarity: 8.0 },
    { topic: 'Offres', frequency: 1, score: 1, polarity: 2.0 },
    { topic: 'App', frequency: 28, score: 24, polarity: -70.0 },
    { topic: 'Attentes', frequency: 60, score: 22, polarity: -99.0 },
    { topic: 'Dotation', frequency: 80, score: 33, polarity: 100.0 }
];

//box2: gauges
data_gauges = [
    { KPI: 'CES', size: -100, difference: 0 },
    { KPI: 'NPS', size: -100, difference: 0 },
    { KPI: 'TS+S', size: 0, difference: 0 }
];

//box2: histogram(benchmark)
var histogram_benchmark_data = [
    { model_name: 'Moins Bon', bon: 0.25 },
    { model_name: 'Pareil', pareil: 0.25 },
    { model_name: 'Meilleur', meilleur: 0.5 }
];
//box2 courbe evolution
var courbe_page1_data = [
    { date: '1-01-2018', value: -50 },
    { date: '1-02-2018', value: 70 },
    { date: '1-05-2018', value: 75 },
    { date: '1-06-2013', value: 25 },
    { date: '1-08-2014', value: -50 },
    { date: '1-07-2015', value: -89 },
    { date: '1-09-2016', value: -50 },
    { date: '1-10-2017', value: -75 },
    { date: '1-11-2018', value: -100 }
];

//box3 sunburst (disk)
sunburst_data = {
    name: ' ',
    children: [
        {
            name: 'Agence',
            polarity: -76,
            frequency: 55,
            score: 55,
            children: [
                {
                    name: 'agence',
                    polarity: 44,
                    frequency: 66,
                    score: 66
                },
                {
                    name: 'filiale',
                    polarity: -12,
                    frequency: 55,
                    score: 11
                },
                {
                    name: 'caisse',
                    polarity: 11,
                    frequency: 6,
                    score: 43
                },
                {
                    name: 'emplacement',
                    polarity: 23,
                    frequency: 45,
                    score: 55
                },
                {
                    name: 'reseau',
                    polarity: 66,
                    frequency: 54,
                    score: 43
                }
            ]
        },
        {
            name: 'Banque',
            polarity: -77,
            frequency: 76,
            score: 16,
            children: [
                {
                    name: 'client',
                    polarity: 43,
                    frequency: 66,
                    score: 98
                },
                {
                    name: 'frais',
                    polarity: 45,
                    frequency: 34,
                    score: 12
                },
                {
                    name: 'compte',
                    polarity: 24,
                    frequency: 44,
                    score: 44
                },
                {
                    name: 'facilites',
                    polarity: 24,
                    frequency: 55,
                    score: 55
                },
                {
                    name: 'disponibilite',
                    polarity: 27,
                    frequency: 77,
                    score: 50
                },
                {
                    name: 'argent',
                    polarity: 72,
                    frequency: 55,
                    score: 24
                },
                {
                    name: 'qualite',
                    polarity: 24,
                    frequency: 45,
                    score: 14
                },
                {
                    name: 'gab',
                    polarity: 50,
                    frequency: 35,
                    score: 19
                }
            ]
        },
        {
            name: 'Comportement',
            polarity: 55,
            frequency: 50,
            score: 50,
            children: [
                {
                    name: 'comportement',
                    polarity: -88,
                    frequency: 65,
                    score: 55
                },
                {
                    name: 'accueil',
                    polarity: -100,
                    frequency: 44,
                    score: 55
                },
                {
                    name: 'communication',
                    polarity: 88,
                    frequency: 66,
                    score: 6
                },
                {
                    name: 'rapidite',
                    polarity: -90,
                    frequency: 90,
                    score: 12
                },
                {
                    name: 'assistance',
                    polarity: 10,
                    frequency: 33,
                    score: 55
                },
                {
                    name: 'procedures',
                    polarity: -10,
                    frequency: 13,
                    score: 3
                }
            ]
        }
    ]
};

//box3 bar chart (mirror left and right)

//ici la valeur "polarity" est toujours >=0
data_left = [
    {
        name: 'comportement',
        polarity: 88,
        frequency: 65,
        score: 55
    },
    {
        name: 'accueil',
        polarity: 100,
        frequency: 44,
        score: 55
    },
    {
        name: 'communication',
        polarity: 88,
        frequency: 66,
        score: 6
    },
    {
        name: 'rapidite',
        polarity: 90,
        frequency: 90,
        score: 12
    },
    {
        name: 'assistance',
        polarity: 10,
        frequency: 33,
        score: 55
    },
    {
        name: 'procedures',
        polarity: 10,
        frequency: 13,
        score: 3
    }
];

//ici la valeur de la "polarity" est <0
data_right = [
    {
        name: 'client',
        polarity: -43,
        frequency: 66,
        score: 98
    },
    {
        name: 'frais',
        polarity: -45,
        frequency: 34,
        score: 12
    },
    {
        name: 'compte',
        polarity: -24,
        frequency: 44,
        score: 44
    },
    {
        name: 'facilites',
        polarity: -24,
        frequency: 55,
        score: 55
    },
    {
        name: 'disponibilite',
        polarity: -27,
        frequency: 77,
        score: 50
    },
    {
        name: 'argent',
        polarity: -72,
        frequency: 55,
        score: 24
    },
    {
        name: 'qualite',
        polarity: -24,
        frequency: 45,
        score: 14
    },
    {
        name: 'gab',
        polarity: -50,
        frequency: 35,
        score: 19
    }
];
//map
var data_map_full = [
    {
        id: 1,
        name: 'Tanger-Tetouan-Al Hoceima',
        tsps: 11,
        diff_tsps: 1,
        nps: -100,
        diff_nps: 5,
        ces: -100,
        diff_ces: -6
    },
    {
        id: 2,
        name: "l'Oriental",
        tsps: 22,
        diff_tsps: 0,
        nps: -60,
        diff_nps: 0,
        ces: -60,
        diff_ces: 6
    },
    {
        id: 3,
        name: 'Fes-Meknes',
        tsps: 33,
        diff_tsps: -1,
        nps: -10,
        diff_nps: -5,
        ces: -10,
        diff_ces: -6
    },
    {
        id: 4,
        name: 'Rabat-Sale-Kenitra',
        tsps: 44,
        diff_tsps: 1,
        nps: 0,
        diff_nps: 0,
        ces: 0,
        diff_ces: 6
    },
    {
        id: 5,
        name: 'Marrakech - BeniMellal - Tafilalt',
        tsps: 55,
        diff_tsps: 0,
        nps: 30,
        diff_nps: 5,
        ces: 6,
        diff_ces: -6
    },
    {
        id: 6,
        name: 'Casablanca-Settat',
        tsps: 66,
        diff_tsps: -1,
        nps: 60,
        diff_nps: -5,
        ces: 50,
        diff_ces: 6
    },
    {
        id: 7,
        name: 'Souss - Massa - Sahara',
        tsps: 77,
        diff_tsps: 1,
        nps: 100,
        diff_nps: 0,
        ces: 100,
        diff_ces: -6
    }
];
//page 2 : details.html
//donut 1 par segment
var data_donut_segment = [
    { id: 1, name: 'Segment S1', score: 35, polarity: -75, frequency: 14 },
    { id: 2, name: 'Segment S2', score: 35, polarity: -13, frequency: 33 },
    { id: 3, name: 'Segment S3', score: 50, polarity: 25, frequency: 24 },
    { id: 4, name: 'Segment S4', score: 40, polarity: 70, frequency: 43 }
];

//donut 1 par segment
var data_donut_region = [
    {
        id: 1,
        name: 'Tanger-Tetouan-Al Hoceima',
        score: 35,
        polarity: -75,
        frequency: 14
    },
    { id: 2, name: "l'Oriental", score: 35, polarity: -13, frequency: 33 },
    { id: 3, name: 'Fes-Meknes', score: 50, polarity: 25, frequency: 24 },
    {
        id: 4,
        name: 'Rabat-Sale-Kenitra',
        score: 40,
        polarity: 70,
        frequency: 43
    },
    {
        id: 5,
        name: 'Marrakech - BeniMellal - Tafilalt',
        score: 35,
        polarity: -13,
        frequency: 33
    },
    {
        id: 6,
        name: 'Casablanca-Settat',
        score: 50,
        polarity: 25,
        frequency: 24
    },
    {
        id: 7,
        name: 'Souss - Massa - Sahara',
        score: 40,
        polarity: 70,
        frequency: 43
    }
];
