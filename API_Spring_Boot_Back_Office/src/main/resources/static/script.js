url = "http://35.189.103.36"
// url = "http://localhost"
port = 80
//SC2
var data_chart3
// {
//     "dates": ["2020-01-22", "2020-01-23", "2020-01-24", "2020-01-25", "2020-01-26", "2020-01-27", "2020-01-28", "2020-01-29", "2020-01-30", "2020-01-31", "2020-02-01", "2020-02-02", "2020-02-03", "2020-02-04", "2020-02-05", "2020-02-06", "2020-02-07", "2020-02-08", "2020-02-09", "2020-02-10", "2020-02-11", "2020-02-12", "2020-02-13", "2020-02-14", "2020-02-15", "2020-02-16", "2020-02-17", "2020-02-18", "2020-02-19", "2020-02-20", "2020-02-21", "2020-02-22", "2020-02-23", "2020-02-24", "2020-02-25", "2020-02-26", "2020-02-27", "2020-02-28", "2020-02-29", "2020-03-01", "2020-03-02", "2020-03-03", "2020-03-04", "2020-03-05", "2020-03-06", "2020-03-07", "2020-03-08", "2020-03-09", "2020-03-10", "2020-03-11", "2020-03-12", "2020-03-13", "2020-03-14", "2020-03-15", "2020-03-16", "2020-03-17", "2020-03-18", "2020-03-19", "2020-03-20", "2020-03-21", "2020-03-22"],
//     "values": {
//         "Maroc": {
//             "confirmed": [0, 0, 0, 0, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 11, 11, 13, 14, 20, 24, 27, 30, 33, 37, 49, 54, 64, 77, 79, 108, 117, 193, 198, 252, 415, 478, 657, 800, 943, 1278, 1465],
//             "deceased": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 4, 5, 8, 9, 12, 19, 21],
//             "recovered": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10],
//             "currently_sick": [0, 0, 0, 0, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 7, 7, 7, 7, 6, 6, 6, 7, 8, 8, 7, 8, 14, 18, 21, 24, 27, 31, 43, 46, 56, 68, 70, 99, 108, 184, 189, 243, 402, 464, 640, 782, 922, 1249, 1434]

//         },
//         "Canada": {
//             "confirmed": [0, 0, 0, 0, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 11, 11, 13, 14, 20, 24, 27, 30, 33, 37, 49, 54, 64, 77, 79, 108, 117, 193, 198, 252, 415, 478, 657, 800, 943, 1278, 1465],
//             "deceased": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 4, 5, 8, 9, 12, 19, 21],
//             "recovered": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10],
//             "currently_sick": [0, 0, 0, 0, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 7, 7, 7, 7, 6, 6, 6, 7, 8, 8, 7, 8, 14, 18, 21, 24, 27, 31, 43, 46, 56, 68, 70, 99, 108, 184, 189, 243, 402, 464, 640, 782, 922, 1249, 1434]
//         }
//     }
// }

var provinces;
var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
var fake_data_char3
    =
{
    "dates": ["1-1-2020", "2-2-2020", "3-3-2020", "4-4,2020"],
    "pays": [
        { "name": "Maroc", "values": [1, 2, 3, 4] },
        { "name": "PAYS 1", "values": [3, 4, 5, 6] },
        { "name": "PAYS 2", "values": [7, 8, 9, 10] },
        { "name": "PAYS 3", "values": [11, 12, 13, 14] }
    ]
}
var data_history;
function getDataPays() {
    $.getJSON('https://boogheta.github.io/coronavirus-countries/data/coronavirus-countries.json', function (data) {
        data_history=data;
        console.log(data)
        fake_data_char3.dates = data.dates
        fake_data_char3.pays = []
        // console.log(data_chart3.scopes)
        world = data.scopes.World.values
        for (var key in world) {
            // console.log(key)
            data = { "name": key, "values": world[key].confirmed, added: false }
            if (key === "Morocco") {
                data.added = false;
            }
            // if (data_chart3.values.hasOwnProperty(key)) {
            //     console.log(key + " -> " + data_chart3.values[key]);
            // }
            fake_data_char3.pays.push(data)
        }
        //SORT
        for (let i = 0; i < fake_data_char3.pays.length; i++) {
            for (let j = 0; j < fake_data_char3.pays.length - 1 - i; j++) {
                // console.log(fake_data_char3.pays[j].name.localeCompare(fake_data_char3.pays[j+1].name))
                if (fake_data_char3.pays[j].name.localeCompare(fake_data_char3.pays[j + 1].name) > 0) {
                    tmp = fake_data_char3.pays[j]
                    fake_data_char3.pays[j] = fake_data_char3.pays[j + 1]
                    fake_data_char3.pays[j + 1] = tmp
                    // console.log(fake_data_char3.pays[j].name)
                }
            }
        }
        // console.log(fake_data_char3.pays)

        var scope = angular.element(document.getElementById('body')).scope()
        scope.fake_data_char3 = fake_data_char3
        // scope.pays = fake_data_char3.pays
        //console.log(scope.pays)
        scope.$apply()
    });
}

var added = 1


var myChart1;
var myChart2;
var myChart3;

var regions_js =
    [
        { "name": "Tanger-Tétouan-Al Hoceïma" },
        { "name": "Oriental" },
        { "name": "Fès-Meknès" },
        { "name": "Rabat-Salé-Kénitra" },
        { "name": "Béni Mellal-Khénifra" },
        { "name": "Casablanca-Settat" },
        { "name": "Marrakech-Safi" },
        { "name": "Drâa-Tafilalet" },
        { "name": "Souss-Massa" },
        { "name": "Guelmim-Oued Noun" },
        { "name": "Laâyoune-Sakia El Hamra" },
        { "name": "Dakhla-Oued Ed-Dahab" },
        { "name": "ALL" }
    ]
var date = new Date()
var username = ""
var password = ""
var app = angular.module('myapp', []);
var map, heatmap;
var mapZoom = 5.5;
// var reg_c={lat: 34.03333333, lng: -6.83333333}
//DATA FOR MAP!!!!!!!! see with soulaymane for region coef
var data_map = [

    { "name": "Tanger-Tétouan-Al Hoceïma", "level": 1, "lat": 35.7652824, "lng": -5.9045166, "estime": 50, "estime_after_week": 100 },
    { "name": "Oriental", "level": 2, "lat": 34.68333333, "lng": -1.9, "estime": 50, "estime_after_week": 100 },
    { "name": "Fès-Meknès", "level": 2, lat: 33.8497377, lng: -5.35472 },
    { "name": "Rabat-Salé-Kénitra", "level": 3, lat: 34.0338183, lng: -6.6939667, "estime": 5, "estime_after_week": 100 },
    { "name": "Béni Mellal-Khénifra", "level": 1, lat: 32.3684, lng: -6.3693, "estime": 15, "estime_after_week": 100 },
    { "name": "Casablanca-Settat", "level": 1, lat: 33.5449813, lng: -7.6383239, "estime": 3000, "estime_after_week": 100 },
    { "name": "Marrakech-Safi", "level": 1, lat: 31.759025, lng: -8.1616821, "estime": 50, "estime_after_week": 100 },
    { "name": "Drâa-Tafilalet", "level": 1, lat: 30.9, lng: -5.6, "estime": 2000, "estime_after_week": 2000 },
    { "name": "Souss-Massa", "level": 1, lat: 30.3707894, lng: -10.1447318, "estime": 5, "estime_after_week": 100 },
    { "name": "Guelmim-Oued Noun", "level": 1, lat: 28.45, lng: -10.11, "estime": 50, "estime_after_week": 100 },
    { "name": "Laâyoune-Sakia El Hamra", "level": 1, lat: 26.133, lng: -14.5, "estime": 50, "estime_after_week": 100 },
    { "name": "Dakhla-Oued Ed-Dahab", "level": 1, lat: 23, lng: -15, "estime": 50, "estime_after_week": 100 }
]

var regions_all_data
//DATA FOR GRAPH
real = {
    part1: { "names": [], "values": [] },
    part2: { "names": [], "values": [] }
}
death = {
    part1: { "names": [], "values": [] },
    part2: { "names": [], "values": [] }
}

estimated = {
    part1: { "names": [], "values": [] },
    part2: { "names": [], "values": [] }
}
app.controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {
    //PAYS FOR CHAR3
    getDataPays()
    //DATA FOR RECOMMANDATION
    $scope.data = []

    //UPDATE THIS WITH THE OLD VALS FORM DB LAST VALS : USER TO SEND THE MANUAL UPDATES TO THE DB
    $scope.regional_updates =
        [
            { "name": "Tanger-Tétouan-Al Hoceïma", "nb_diag": 3, "dont_hosp": 3, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
            { "name": "Oriental", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
            { "name": "Fès-Meknès", "nb_diag": 6, "dont_hosp": 6, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
            { "name": "Rabat-Salé-Kénitra", "nb_diag": 15, "dont_hosp": 15, "nb_lit": 1640, "nb_mort": 1, "nb_retab": 0 },
            { "name": "Béni Mellal-Khénifra", "nb_diag": 2, "dont_hosp": 2, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
            { "name": "Casablanca-Settat", "nb_diag": 9, "dont_hosp": 9, "nb_lit": 1640, "nb_mort": 1, "nb_retab": 0 },
            { "name": "Marrakech-Safi", "nb_diag": 5, "dont_hosp": 5, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
            { "name": "Drâa-Tafilalet", "nb_diag": 0, "dont_hosp": 0, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
            { "name": "Souss-Massa", "nb_diag": 2, "dont_hosp": 2, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
            { "name": "Guelmim-Oued Noun", "nb_diag": 1, "dont_hosp": 1, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
            { "name": "Laâyoune-Sakia El Hamra", "nb_diag": 0, "dont_hosp": 0, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
            { "name": "Dakhla-Oued Ed-Dahab", "nb_diag": 0, "dont_hosp": 0, "nb_lit": 1640, "nb_mort": 0, "nb_retab": 0 },
        ]
    //USER TO SEND THE NEW ACTIONS TO THE BACK END
    $scope.actions_updates = []


    $scope.logged = false
    $scope.modal1 = true;
    $scope.nbDays = 30

    $scope.filtre = 0;

    $scope.filtreSet = function (val) {
        // alert(val)
        $scope.filtre = val
        // console.log("--------")
        // console.log($scope.data)
        // alert("here")
        getRecommandation($scope.data)
    }
    $scope.history = false
    $scope.date = new Date()

    $scope.nb_cas = 0
    $scope.nb_cas_real = 0
    $scope.nb_mort = 0
    $scope.nb_lit_dispo = 0
    //STATIC DONT TOUCH
    $scope.actions = [
        "contrôle des frontières",
        "Fermeture des vols",
        "Interdiction des navires de croisière",
        "Amende pour les personnes enfreignant la règle de la quarantaine",
        "Les professionnels de la santé interdits de voyage à l'étranger",
        "production de masques",
        "Fermeture des écoles",
        "Arrêt de travail des employés",
        "Télétravail imposé pour les employés",
        "quarantaines pour certaines parties du pays",
        "Les rassemblements Annulés",
        "Les restaurants, bars et cinémas, commerces non essentiels",
        "annulation des événements",
        "Les restaurants, bars et cinémas, commerces non essentiels",
        "Guichets communaux préférablement par téléphone"
    ]

    //USER TO SET RECOMMANDATION FILTER
    $scope.filtreTable = ["sante", "mobilite", "Economie et Industrie", "Reglementation"]

    //USER TO SET THE REGIONS FILTER
    $scope.regions =
        [
            { "name": "Tanger-Tétouan-Al Hoceïma" },
            { "name": "Oriental" },
            { "name": "Fès-Meknès" },
            { "name": "Rabat-Salé-Kénitra" },
            { "name": "Béni Mellal-Khénifra" },
            { "name": "Casablanca-Settat" },
            { "name": "Marrakech-Safi" },
            { "name": "Drâa-Tafilalet" },
            { "name": "Souss-Massa" },
            { "name": "Guelmim-Oued Noun" },
            { "name": "Laâyoune-Sakia El Hamra" },
            { "name": "Dakhla-Oued Ed-Dahab" },
            { "name": "ALL" }
        ]


    $scope.chart3change = function (index) {
        if ($scope.fake_data_char3.pays[index].added) {
            if (added >= 10) {
                $scope.fake_data_char3.pays[index].added = false;
                alert("Vous pouvez ajouter 10 pays au maximum!")
                return
            }
            added = added + 1
        }
        else {
            added = added - 1
        }
        // scope.fake_data_char3.pays[index].added = !scope.fake_data_char3.pays[index].added;
        //scope.$apply()
        setGraphbox1(real, death, estimated)
    }

    //WITH THE ACTION MODEL (ALLOW ONLY SOME USERS (SEE WITH SOLAIMANE))
    $scope.add_action = function () {
        date = new Date()
        action = ""
        $scope.actions_updates.push({ date: date, action: action })
    }
    $scope.model = function (val) {
        //entre 19:30 et 23:45 plz  check if 12 or 24 base
        let d = new Date();
        let max = new Date()
        max.setHours(23)
        max.setMinutes(45);
        let min = new Date()
        min.setHours(19)
        min.setMinutes(30);


        if (d <= max && d >= min) {

        }
        else {
            alert("L'ajout de cas n'est activé que de 19h00 à 23h59 pour ne prendre en compte que les données du soir et ne pas corrompre la base de données")
            return
        }

        //ACTIVATE THIS
        if (!(username !== "covid19tracker@aiox-labs.com" || username !== "mehdi@lafactory.com")) {
            return
        }
        $scope.modal1 = val;//true/false
        $window.location = "#popup1"
    }
    $scope.setNbDays = function (val) {

        $scope.nbDays = val;
        getData()

    }
}]);

function ready() {

    $(document).ready(function () {
        // fill_all()
        console.log("ready")
        $('.spinner-grow').fadeOut(() => {
            $('#preloader').fadeOut(() => {
                $('#preloader').toggleClass('d-flex');
                $('html').toggleClass('overflow-hidden');
            });
        })

        $('select[name=survey]').change(function () {

        });

        $('#opinion_frequence_chb').change(function () {
            // var scope = angular.element(document.getElementById('body')).scope()
            // let disk = scope.disk
            // scope.$apply()

        });
        $('#username').change(function () {
            username = this.value
        });
        $('#password').change(function () {
            password = this.value
        });
        $('#date1').change(function () {
            var scope = angular.element(document.getElementById('body')).scope()
            date = this.value
            // scope.$apply()

        });
        $('select[name=region]').change(function () {
            var selected_region = this.value
            //UPDATE GRAPH DATA WITH SELECTED REGION
            // alert(this.value)
            plotData(this.value)

        });
        $('input[name=history]').change(function () {
            // alert(this.checked)

            var scope = angular.element(document.getElementById('body')).scope()
            scope.fake_data_char3 = fake_data_char3
            scope.history = this.checked
            // scope.pays = fake_data_char3.pays
            //console.log(scope.pays)
            scope.$apply()
            if (this.checked) {
                $('#region').val("ALL");
                $('#region').prop("disabled", true);
            }
            else {
                $('#region').prop("disabled", false);
            }

            plotData("ALL")
            //UPDATE GRAPH DATA WITH SELECTED REGION
            // alert(this.value)
            //plotData(this.value)

        });
        // $('select[name=pays]').change(function () {
        //     var scope = angular.element(document.getElementById('body')).scope()
        //     if(!scope.fake_data_char3.pays[this.selectedIndex].added)
        //     {
        //         if(added>=10)
        //         {
        //             alert("Vous pouvez ajouter 10 pays au maximum!")
        //             return
        //         }
        //         added=added+1
        //     }
        //     else
        //     {
        //         added=added-1
        //     }
        //     scope.fake_data_char3.pays[this.selectedIndex].added = !scope.fake_data_char3.pays[this.selectedIndex].added;
        //     scope.$apply()
        //    setGraphbox1(real, death, estimated)

        // });
    });


}




ready();

function login() {

    // Form Data
    var fd = new FormData();
    fd.append('date', "");
    //fd.append('user', GoogleAuth.currentUser);
    var info = { username: username, password: password }


    //send it to back-end
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: url + ':' + port + '/login',
        data: JSON.stringify(info),
    })
        .done(function (data) {
            //alert(data)
            let dataJSON = JSON.parse(data)
            var scope = angular.element(document.getElementById("body")).scope();
            scope.logged = dataJSON.login;
            scope.$apply()
            if (!dataJSON.login) {
                alert("Mot de passe / email incorrect!")
            }
            else {
                setTimeout(function () { getData(); }, 3000);
            }

            //ready()
            return;
        })
        .fail(function () {
            // alert("error");
        });
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function setGraphbox1(real, death, estimated) {
    let max1 = 0
    let max2 = 0
    let max3 = 0
    // console.log("=")
    // console.log(real)
    var prediction = real.part1
    // dates = real.part2

    var prediction2 = death.part1
    // dates2 = death.part2

    var prediction3 = estimated.part1
    // dates3 = estimated.part2

    labels = []
    values = [] //6 valeur
    // for (let i = 2; i < 6; i++) {
    //     values.push(dates.values[i])
    //     labels.push(dates.names[i])
    // }
    for (let i = 0; i < prediction.values.length; i++) {
        // console.log("---")
        // console.log(prediction.values[i])
        // console.log(prediction.names[i])
        values.push(prediction.values[i])
        labels.push(prediction.names[i])
        if (values[i] > max1) {
            max1 = values[i]
        }
    }

    //console.log("test")

    //if(not containing morocco predicted add the graph new)
    var scope = angular.element(document.getElementById('body')).scope()
    let found = false

    for (let i = 0; i < scope.fake_data_char3.pays.length; i++) {
        if (scope.fake_data_char3.pays[i].name === "Morocco predictions") {
            found = true
            break
        }
    }
    if (!found) {

        let j = 0
        for (let i = 0; i < scope.fake_data_char3.pays.length; i++) {
            if (scope.fake_data_char3.pays[i].name === "Morocco") {
                j = i
                break
            }
        }
        let vals = scope.fake_data_char3.pays[j].values;
        vals = vals.concat(values)
        //console.log(vals)
        p = [{ name: "Morocco predictions", values: vals, added: true }]
        scope.fake_data_char3.pays = p.concat(scope.fake_data_char3.pays)
        scope.$apply()
        //console.log(scope.fake_data_char3)
    }


    labels2 = []
    values2 = [] //6 valeur
    // for (let i = 2; i < 6; i++) {
    //     values2.push(dates2.values[i])
    //     labels2.push(dates2.names[i])
    // }
    for (let i = 0; i < prediction2.values.length; i++) {
        // console.log("---")
        // console.log(prediction2.values[i])
        // console.log(prediction2.names[i])
        let deces = prediction2.values[i]
        if (deces < values2[i - 1] && i > 0) {
            values2.push(values2[i - 1])
        }
        else {
            values2.push(deces)
        }
        labels2.push(prediction2.names[i])
        if (values2[i] > max2) {
            max2 = values2[i]
        }
    }


    labels3 = []
    values3 = [] //6 valeur
    // for (let i = 2; i < 6; i++) {
    //     values3.push(dates3.values[i])
    //     labels3.push(dates3.names[i])
    // }
    for (let i = 0; i < prediction3.values.length; i++) {
        // console.log("---")
        // console.log(prediction3.values[i])
        // console.log(prediction3.names[i])
        values3.push(prediction3.values[i])
        labels3.push(prediction3.names[i])
        if (values3[i] > max3) {
            max3 = values3[i]
        }
    }


    if (scope.history) {

        console.log("==")

        console.log("test")
        console.log(data_history.dates)
        console.log(data_history.scopes.World.values.Morocco)

        //remove zero vals
        while (data_history.scopes.World.values.Morocco.confirmed[0] == 0) {
            data_history.scopes.World.values.Morocco.confirmed.splice(0, 1)
            data_history.scopes.World.values.Morocco.deceased.splice(0, 1)
            data_history.dates.splice(0, 1)
        }

        // labels_mg = data_history.dates.concat(labels_mg)
        labels = data_history.dates.concat(labels)

        // values_mg = data_history.scopes.World.values.Morocco.confirmed.concat(values_mg)
        values = data_history.scopes.World.values.Morocco.confirmed.concat(values)

        // labels2_mg = fake_data_char3.dates.concat(labels2_mg)
        // labels2 = fake_data_char3.dates.concat(labels2)

        // values2_mg = fake_data_char3.scopes.World.values.Morocco.deceased.concat(values2_mg)
        // values2 = fake_data_char3.scopes.World.values.Morocco.deceased.concat(values2)


        // labels2_mg = fake_data_char3.dates.concat(labels2_mg)
        // labels2 = fake_data_char3.dates.concat(labels2)

        // values3_mg = fake_data_char3.scopes.World.values.Morocco.confirmed.concat(values3_mg)
        // values3 = fake_data_char3.scopes.World.values.Morocco.confirmed.concat(values3)
    }


    datasetsList2 = []
    p = {
        label: "cas confirmés",
        // yAxisID: 'real',
        fill: false,
        data: values,
        backgroundColor: [
            'rgb(68, 114, 196)'
        ],
        borderColor: [
            'rgb(68, 114, 196)'
        ],
        borderWidth: 2
    }
    p2 = {
        label: "Décès",
        fill: false,
        // yAxisID: 'real',
        data: values2,
        backgroundColor: [
            'rgb(25, 5, 0)'
        ],
        borderColor: [
            'rgb(25, 5, 0)'
        ],
        borderWidth: 2
    }

    p3 = {
        label: "cas réels",
        fill: false,
        data: values3,
        // yAxisID: 'estimated',
        backgroundColor: [
            'rgb(186, 0, 0)'
        ],
        borderColor: [
            'rgb(186, 0, 0)'
        ],
        borderWidth: 2
    }






    let datasetsList_deces = []
    datasetsList2.push(p)
    datasetsList_deces.push(p2)
    datasetsList3 = []
    datasetsList3.push(p3)
    // var ann = [1];
    // var ann_labels = ['today'];

    // var annotations_array = ann.map(function (value, index) {
    //     return {
    //         type: 'line',
    //         id: 'vline' + index,
    //         mode: 'vertical',
    //         scaleID: 'x-axis-0',
    //         value: value,
    //         borderColor: 'red',
    //         borderWidth: 2,
    //         label: {
    //             backgroundColor: 'rgba(0,0,0,0.4)',
    //             fontColor: "#fff",
    //             enabled: true,
    //             position: "top",
    //             content: ann_labels[index]
    //         }
    //     }
    // });


    try {
        myChart1.data.labels.pop();
        myChart1.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        myChart1.update();
    }
    catch (e) {
        console.log(e)
    }



    $('#myChart1').remove();
    var canvas1 = document.createElement("canvas");
    canvas1.setAttribute("id", "myChart1");
    $("#charts1").append(canvas1);

    $('#myChart_deces').remove();
    var canvas_deces = document.createElement("canvas");
    canvas_deces.setAttribute("id", "myChart_deces");
    $("#charts1").append(canvas_deces);


    $('#myChart2').remove();
    var canvas2 = document.createElement("canvas");
    canvas2.setAttribute("id", "myChart2");
    $("#charts1").append(canvas2);

    $('#myChart3').remove();
    var canvas3 = document.createElement("canvas");
    canvas3.setAttribute("id", "myChart3");
    canvas3.setAttribute("style", "padding-top: 5%; display: block;width: 90%;margin-left: auto;margin-right: auto;max-height: 600px;");
    $("#charts2").append(canvas3);

    // ctx2.innerHTML = '';
    // var myChart1;
    // try
    // {
    //     removeData(myChart2)
    // }
    // catch(e)
    // {

    // }
    var ctx1 = document.getElementById('myChart1');
    myChart1 =

        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasetsList2
            },
            options: {

                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                stepSize: Math.round(max1 / 10),
                                maxTicksLimit: max1,
                                suggestedMax: max1,
                                position: 'left',
                                id: 'real',


                            },
                            position: "left",
                            animation: {
                                duration: 0
                            }

                        }
                    ]
                }
            }
        });


    var ctx_deces = document.getElementById('myChart_deces');
    var myChart_deces =

        new Chart(ctx_deces, {
            type: 'line',
            data: {
                labels: labels2,
                datasets: datasetsList_deces
            },
            options: {

                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                stepSize: Math.round(max2 / 10),
                                maxTicksLimit: max2,
                                suggestedMax: max2,
                                position: 'left',
                                id: 'real',


                            },
                            position: "left",
                            animation: {
                                duration: 0
                            }

                        }
                    ]
                }
            }
        });
    // myChart2.update();
    var ctx2 = document.getElementById('myChart2');
    // ctx3.innerHTML = '';
    // var myChart2;
    // try
    // {
    //     removeData(myChart3)
    // }
    // catch(e)
    // {

    // }




    myChart2 =

        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: labels2,
                datasets: datasetsList3
            },
            options: {

                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                stepSize: Math.round(max3 / 10),
                                maxTicksLimit: max3,
                                suggestedMax: max3,
                                id: 'estimated',



                            }
                        }
                    ]
                }
            }
        }); $('#date1').change(function () {
            var scope = angular.element(document.getElementById('body')).scope()
            date = this.value
            // scope.$apply()

        });
    $('select[name=region]').change(function () {
        var selected_region = this.value
        //UPDATE GRAPH DATA WITH SELECTED REGION
        //alert(this.value)
        plotData(this.value)

    });


    //PREPARE DATA FOR COMPARING COUNTRIES

    var ctx3 = document.getElementById('myChart3');
    // ctx3.innerHTML = '';

    // try
    // {
    //     removeData(myChart3)
    // }
    // catch(e)
    // {

    // }

    // DATA FORMAT : 
    //fake_data_char3
    var scope = angular.element(document.getElementById('body')).scope()
    fake_data_char3 = scope.fake_data_char3

    // console.log("================")
    // console.log(fake_data_char3)


    labels_pays = []
    for (let i = 0; i < fake_data_char3.dates.length; i++) {
        labels_pays.push(fake_data_char3.dates[i])
    }

    // let zeroIndex = labels_pays.length;
    var max_val = 0;
    datasetsList_pays = []
    for (i = 0; i < fake_data_char3.pays.length; i++) {

        pays = fake_data_char3.pays[i]
        if (pays.added == false) {
            continue
        }
        values = []
        taille = 0;
        for (let j = 0; j < pays.values.length; j++) {
            while (pays.values[0] == 0) {
                let tmp = pays.values[0]
                for (let k = 0; k < pays.values.length - 1; k++) {
                    pays.values[k] = pays.values[k + 1]
                }
                pays.values[pays.values.length - 1] = tmp
            }
            let k = pays.values.length - 1;
            while (pays.values[k] == 0) {
                pays.values[k] = NaN
                //pays.values.splice(k,1);
                k--;
            }
            //if(pays.values[j]!=0)
            values.push(pays.values[j])


            if (max_val < pays.values[j]) {
                max_val = pays.values[j];
            }
            // if(j<zeroIndex && pays.values[j]!=0)
            // {
            //     zeroIndex = j;
            // }
        }
        var color = random_rgba();
        let my_colors = []
        for (let k = 0; k < values.length; k++) {
            if (values[k] == 0) {
                my_colors.push("#ffffff")
                my_colors[k - 1] = "#ffffff"

            }
            else {

                my_colors.push(color)
            }
        }
        p = {
            label: pays.name,
            // yAxisID: 'real',
            fill: false,
            data: values,
            spanGaps: false,
            backgroundColor: color,
            borderColor: color,

            borderWidth: 2
        }

        datasetsList_pays.push(p)
    }
    //labels_pays.splice(0,zeroIndex)
    // for(j=0;j<datasetsList_pays.length;j++)
    // {
    //     datasetsList_pays[j].data.splice(0,zeroIndex)
    // }
    for (let i = 0; i < labels_pays.length; i++) {
        labels_pays[i] = "jour " + (i + 1)
    }
    // console.log(zeroIndex)
    myChart3 =

        new Chart(ctx3, {
            type: 'line',
            data: {
                labels: labels_pays,
                datasets: datasetsList_pays
            },
            options: {


                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                stepSize: Math.round(max_val / 10),
                                maxTicksLimit: max_val,
                                suggestedMax: max_val,
                                id: 'estimated',



                            }
                        }
                    ]
                }
            }
        });
    // console.log("===============>")
    // console.log(myChart3.data.datasets[0])
    // for(let i=0;i<myChart3.data.datasets.length;i++)
    // {
    //     console.log(myChart3.data.datasets[i].data)
    //     for(let j=0;j<myChart3.data.datasets[i].data.length;j++)
    //     {
    //         console.log(myChart3.data.datasets[i].data[j])
    //         if(myChart3.data.datasets[i].data[j] == 0)
    //         {
    //             myChart3.data.datasets[i].pointBackgroundColor[j] = "#000000";
    //             myChart3.data.datasets[i].pointBorderColor[j] = "#000000";
    //         }
    //     }
    // }
    // myChart3.update();

    $('#date1').change(function () {
        var scope = angular.element(document.getElementById('body')).scope()
        date = this.value
        // scope.$apply()

    });
    $('select[name=region]').change(function () {
        var selected_region = this.value
        //UPDATE GRAPH DATA WITH SELECTED REGION
        //alert(this.value)
        plotData(this.value)

    });
    $('input[name=history]').change(function () {
        // alert(this.checked)

        var scope = angular.element(document.getElementById('body')).scope()
        scope.fake_data_char3 = fake_data_char3
        scope.history = this.checked
        // scope.pays = fake_data_char3.pays
        //console.log(scope.pays)
        scope.$apply()
        if (this.checked) {
            $('#region').val("ALL");
            $('#region').prop("disabled", true);
        }
        else {
            $('#region').prop("disabled", false);
        }

        plotData("ALL")
        //UPDATE GRAPH DATA WITH SELECTED REGION
        // alert(this.value)
        //plotData(this.value)

    });
}

// function removeData(chart) {
//     chart.data.labels.pop();
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.pop();
//     });
//     chart.update();
// }
//=========================== GOOGLE MAPS==================

// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUf-lvxaloDpGUZ8xYPMDnf2t3D-BF04M&libraries=visualization">



function initMap() {
    const mapOptions = {
        zoom: mapZoom,
        center: new google.maps.LatLng(29.2710757, -8.8177464),
        mapTypeId: google.maps.MapTypeId.satellite,
        zoomControl: true,
        mapTypeControl: false,
        //scaleControl: true,
        //streetViewControl: boolean,
        // rotateControl: boolean,
        // fullscreenControl: boolean
        // roadmap displays the default road map view. This is the default map type.
        // satellite displays Google Earth satellite images.
        // hybrid displays a mixture of normal and satellite views.
        // terrain displays a physical map based on terrain information.
    };

    // map = new google.maps.Map(document.getElementById('googleMap'), {
    //   zoom: 4,
    //   center: {lat: 34.03333333, lng: -6.83333333},
    //   mapTypeId: 'satellite'
    // });



    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions),
        mapStyles = [{ featureType: "administrative.country", stylers: [{ visibility: "off" }] }],
        mapType = new google.maps.StyledMapType(mapStyles, { name: "Maroc" });
    map.mapTypes.set('maroc', mapType);
    map.setMapTypeId('maroc');
    layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '1S4aLkBE5u_WS0WMVSchhBgMLdAARuPEjyW4rs20',
            where: "col1 contains 'MAR'"
        },
        styles: [{
            polylineOptions: {
                strokeColor: "#333333",
                strokeWeight: 2
            },
        }],
        suppressInfoWindows: true,
    });
    layer.setMap(map);
    // alert(data_map)
    for (let i = 0; i < data_map.length; i++) {
        // console.log(regions_js[i].name)
        // console.log(JSON.stringify(data_map[regions_js[i].name]))

        var reg_c = data_map[i]

        heatmap = new google.maps.visualization.HeatmapLayer({
            data: getPoints(reg_c.lat, reg_c.lng, reg_c.level, reg_c.nb_cas_estime),
            map: map
        });
        heatmap.set('radius', 10);
    }

}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}



function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 1);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points

function getPoints(x, y, level, nb_cas_confirme) {
    nbPoints = 0;
    if (nb_cas_confirme <= 0) {
        return []
    }
    if (nb_cas_confirme < 1000) {
        nbPoints = 6
    }
    else if (nb_cas_confirme < 2000) {
        nbPoints = 8
    }
    if (nb_cas_confirme < 4000) {
        nbPoints = 10
    }
    else
        if (nb_cas_confirme < 8000) {
            nbPoints = 15
        }
        else
            if (nb_cas_confirme < 16000) {
                nbPoints = 18
            }
            else
                if (nb_cas_confirme < 32000) {
                    nbPoints = 21
                }

                else {
                    nbPoints = 24
                }
    // alert(nbPoints)
    ret = []
    // let nbPoints = 7
    random = []
    for (let i = 0; i < nbPoints; i++) {
        random.push(Math.random())

    }
    for (let i = 0; i < random.length; i++) {
        for (let j = 0; j < random.length; j++) {
            ret.push(new google.maps.LatLng(x - random[i] * random[Math.floor(Math.random() * Math.floor(nbPoints - 1))], y + random[i] * random[Math.floor(Math.random() * Math.floor(nbPoints - 1))]))

        }
    }
    return ret;
}


function getRecommandation(data) {
    // Form Data

    var scope = angular.element(document.getElementById('body')).scope()
    nbDays = scope.nbDays
    var fd = new FormData();
    fd.append('date', "");
    //fd.append('user', GoogleAuth.currentUser);
    var info = { data: data }
    // $loading.show();
    $("#loadMe").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
    });
    //send it to back-end
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: url + ':' + port + '/getRecommandation',
        data: JSON.stringify(info),
    })
        .done(function (data) {
            $("#loadMe").modal("hide");
            //alert(data)
            dataJSON = JSON.parse(data)
            // console.log(data)
            var scope = angular.element(document.getElementById('body')).scope()
            scope.data = []


            for (let i = 0; i < dataJSON.length; i++) {
                // console.log(dataJSON[i].date)
                for (j = 0; j < dataJSON[i].recommandation.length; j++) {
                    scope.data.push({ "level": dataJSON[i].recommandation[j].level, "date": dataJSON[i].date, region: dataJSON[i].region, "subject": dataJSON[i].recommandation[j].subject, "action": dataJSON[i].recommandation[j].action, "channel": dataJSON[i].recommandation[j].channel })
                }

            }

            scope.$apply()
            // initMap()
            // plotData("ALL")
            //ready();

            //
            // ready()
            $('#username').change(function () {
                username = this.value
            });
            $('#password').change(function () {
                password = this.value
            });
            $('#date1').change(function () {
                var scope = angular.element(document.getElementById('body')).scope()
                date = this.value
                // scope.$apply()

            });
            $('select[name=region]').change(function () {
                var selected_region = this.value
                //UPDATE GRAPH DATA WITH SELECTED REGION
                // alert(this.value)
                plotData(this.value)

            });

        })
        .fail(function () {
            // alert("error");
            $("#loadMe").modal("hide");

        });
}


function getData() {
    // Form Data

    var scope = angular.element(document.getElementById('body')).scope()
    nbDays = scope.nbDays
    var fd = new FormData();
    fd.append('date', "");
    //fd.append('user', GoogleAuth.currentUser);
    var info = { nbDays: nbDays }
    // $loading.show();
    $("#loadMe").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
    });
    //send it to back-end
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: url + ':' + port + '/getData',
        data: JSON.stringify(info),
    })
        .done(function (data) {
            $("#loadMe").modal("hide");
            //alert(data)
            provinces = JSON.parse(data).provinces
            console.log(provinces)
            dataJSON = JSON.parse(data).data
            // console.log(data)
            var scope = angular.element(document.getElementById('body')).scope()
            scope.data = []
            real = {
                part1: { "names": [], "values": [] },
                part2: { "names": [], "values": [] }
            }
            death = {
                part1: { "names": [], "values": [] },
                part2: { "names": [], "values": [] }
            }

            estimated = {
                part1: { "names": [], "values": [] },
                part2: { "names": [], "values": [] }
            }
            regions_all_data = []
            for (let i = 0; i < dataJSON.length; i++) {
                // console.log(dataJSON[i].date)
                // for (j = 0; j < dataJSON[i].recommandation.length; j++) {
                //     scope.data.push({ "level": dataJSON[i].recommandation[j].level, "date": dataJSON[i].date, region: dataJSON[i].region, "subject": dataJSON[i].recommandation[j].subject, "action": dataJSON[i].recommandation[j].action, "channel": dataJSON[i].recommandation[j].channel })
                // }
                if (!regions_all_data[dataJSON[i].region])
                    regions_all_data[dataJSON[i].region] = []
                regions_all_data[dataJSON[i].region].push(dataJSON[i]);
                for (k = 0; k < data_map.length; k++) {
                    if (data_map[k].name === dataJSON[i].region) {
                        data_map[k].nb_cas_estime = dataJSON[i].nb_cas_estime;
                        break;
                    }
                }
            }

            for (let k = 0; k < scope.regions.length; k++) {
                //print(regions_all_data[regions_all_data.length-1]);
                // console.log("===========")
                // console.log(scope.regions[k].name)
                // console.log(regions_all_data[scope.regions[k].name][0])
                scope.data.push(regions_all_data[scope.regions[k].name][regions_all_data[scope.regions[k].name].length - 1]);
                // for (j = 0; j < dataJSON[i].recommandation.length; j++) {
                //     scope.data.push({ "level": dataJSON[i].recommandation[j].level, "date": dataJSON[i].date, region: dataJSON[i].region, "subject": dataJSON[i].recommandation[j].subject, "action": dataJSON[i].recommandation[j].action, "channel": dataJSON[i].recommandation[j].channel })
                // }
            }

            scope.filtre = 1
            scope.$apply()
            initMap()
            plotData("ALL")
            //ready();
            var scope = angular.element(document.getElementById('body')).scope()
            $("#region").val("ALL");
            getRecommandation(scope.data)
            //
            // ready()


        })
        .fail(function () {
            // alert("error");
            $("#loadMe").modal("hide");

        });
}

function plotData(region) {

    var data = regions_all_data[region];
    // console.log(JSON.stringify(data))
    real = {
        part1: { "names": [], "values": [] },
        part2: { "names": [], "values": [] }
    }
    death = {
        part1: { "names": [], "values": [] },
        part2: { "names": [], "values": [] }
    }

    estimated = {
        part1: { "names": [], "values": [] },
        part2: { "names": [], "values": [] }
    }
    var scope = angular.element(document.getElementById('body')).scope()
    scope.nb_cas = 0
    scope.nb_cas_real = 0
    scope.nb_mort = 0
    scope.nb_lit_dispo = 0

    for (i = 0; i < data.length; i++) {

        scope.nb_cas = data[i].nb_cas_confirme
        scope.nb_cas_real = data[i].nb_cas_estime
        scope.nb_mort = Math.round(data[i].nb_cas_confirme * 0.039)
        scope.nb_lit_dispo += data[i].nb_lits
        if (data[i].nb_lits > 0) {
            scope.nb_lit_dispo = data[i].nb_lits

        }
        if (region === "ALL") {
            if (regions_all_data["Oriental"][i].nb_lits > 0) {
                scope.nb_lit_dispo = regions_all_data["Oriental"][i].nb_lits * 12
            }

        }
        // console.log(data[i].date)
        death.part1.names.push(data[i].date)
        death.part1.values.push(Math.round(data[i].nb_cas_confirme * 0.039))

        real.part1.names.push(data[i].date)
        real.part1.values.push(data[i].nb_cas_confirme)

        estimated.part1.names.push(data[i].date)
        estimated.part1.values.push(data[i].nb_cas_estime)

        death.part2.names.push(data[i].date)
        death.part2.values.push(Math.round(data[i].nb_cas_confirme * 0.039))

        real.part2.names.push(data[i].date)
        real.part2.values.push(data[i].nb_cas_confirme)

        estimated.part2.names.push(data[i].date)
        estimated.part2.values.push(data[i].nb_cas_estime)
        // if (i <= 2) {
        //     death.part1.names.push(data[i].date)
        //     death.part1.values.push(data[i].nb_cas_confirme * 0.039)

        //     real.part1.names.push(data[i].date)
        //     real.part1.values.push(data[i].nb_cas_confirme)

        //     estimated.part1.names.push(data[i].date)
        //     estimated.part1.values.push(data[i].nb_cas_estime)
        // }
        // else {
        //     death.part2.names.push(data[i].date)
        //     death.part2.values.push(data[i].nb_cas_confirme * 0.039)

        //     real.part2.names.push(data[i].date)
        //     real.part2.values.push(data[i].nb_cas_confirme)

        //     estimated.part2.names.push(data[i].date)
        //     estimated.part2.values.push(data[i].nb_cas_estime)
        // }
    }
    scope.$apply()
    // real = {
    //     part1: { "names": [], "values": [] },
    //     part2: { "names": ["14-03-20", "15-03-20", "16-03-20", "17-03-20", "18-03-20", "19-03-20"], "values": [50, 60, 50, 60, 50, 60] }
    // }
    // death = {
    //     part1: { "names": [], "values": [] },
    //     part2: { "names": ["14-03-20", "15-03-20", "16-03-20", "17-03-20", "18-03-20", "19-03-20"], "values": [5, 6, 5, 6, 13, 40] }
    // }

    // estimated = {
    //     part1: { "names": [], "values": [] },
    //     part2: { "names": ["14-03-20", "15-03-20", "16-03-20", "17-03-20", "18-03-20", "19-03-20"], "values": [500, 600, 500, 600, 500, 600] }
    // }

    setGraphbox1(real, death, estimated)
}




function setCas() {
    let d = new Date();
    let max = new Date()
    max.setHours(23)
    max.setMinutes(45);
    let min = new Date()
    min.setHours(19)
    min.setMinutes(30);


    if (d <= max && d >= min) {

    }
    else {
        alert("L'ajout de cas n'est activé que de 19h00 à 23h59 pour ne prendre en compte que les données du soir et ne pas corrompre la base de données")
        return
    }
    // Form Data
    var scope = angular.element(document.getElementById('body')).scope()
    var cas = scope.regional_updates

    var fd = new FormData();
    fd.append('date', "");
    //fd.append('user', GoogleAuth.currentUser);
    var info = { "cas": cas, "date": date }// that was date!!!!
    $("#loadMe").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
    });

    //send it to back-end
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: url + ':' + port + '/setCas',
        data: JSON.stringify(info),
    })
        .done(function (data) {
            $("#loadMe").modal("hide");
            // alert(data)
            // ready()
            getData()
        })
        .fail(function () {
            // alert("error");
            $("#loadMe").modal("hide");
        });
}


function setActions() {
    // Form Data

    var scope = angular.element(document.getElementById('body')).scope()
    var actions = scope.actions_updates
    scope.$apply()
    var fd = new FormData();
    fd.append('date', "");
    //fd.append('user', GoogleAuth.currentUser);
    var info = { actions: actions }

    $("#loadMe").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
    });
    //send it to back-end
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: url + ':' + port + '/setActions',
        data: JSON.stringify(info),
    })
        .done(function (data) {
            $("#loadMe").modal("hide");
            // alert(data)
            // ready()
            getData()
        })
        .fail(function () {
            // alert("error");
            $("#loadMe").modal("hide");
        });
}


//PROVINCE

function ajaxSubmitForm(id) {


    // Get form
    var form = $('#' + id)[0];

    var data = new FormData(form);



    $("#loadMe").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
    });

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        // url: "http://localhost:3000/rest/uploadMultiFiles",
        url: url + ':' + port + '/exceltojson',
        data: data,

        // prevent jQuery from automatically transforming the data into a query string
        processData: false,
        contentType: false,
        cache: false,
        timeout: 1000000,
        success: function (data, textStatus, jqXHR) {
            var scope = angular.element(document.getElementById("body")).scope();
            data = JSON.parse(data).page1.data
            $("#loadMe").modal("hide");
            //GET DATA FROM EXCEL AND FILL DATA FOR MODEL
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 0; i <= 7; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[0].nb_diag = nb_diag
            scope.regional_updates[0].dont_hosp = dont_hosp
            scope.regional_updates[0].nb_lit = nb_lit
            scope.regional_updates[0].nb_mort = nb_mort
            scope.regional_updates[0].nb_retab = nb_retab



            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 8; i <= 15; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[1].nb_diag = nb_diag
            scope.regional_updates[1].dont_hosp = dont_hosp
            scope.regional_updates[1].nb_lit = nb_lit
            scope.regional_updates[1].nb_mort = nb_mort
            scope.regional_updates[1].nb_retab = nb_retab


            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 16; i <= 24; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[2].nb_diag = nb_diag
            scope.regional_updates[2].dont_hosp = dont_hosp
            scope.regional_updates[2].nb_lit = nb_lit
            scope.regional_updates[2].nb_mort = nb_mort
            scope.regional_updates[2].nb_retab = nb_retab


            //==========
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 25; i <= 31; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[3].nb_diag = nb_diag
            scope.regional_updates[3].dont_hosp = dont_hosp
            scope.regional_updates[3].nb_lit = nb_lit
            scope.regional_updates[3].nb_mort = nb_mort
            scope.regional_updates[3].nb_retab = nb_retab
            //==========
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 32; i <= 36; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[4].nb_diag = nb_diag
            scope.regional_updates[4].dont_hosp = dont_hosp
            scope.regional_updates[4].nb_lit = nb_lit
            scope.regional_updates[4].nb_mort = nb_mort
            scope.regional_updates[4].nb_retab = nb_retab

            //==========
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 37; i <= 45; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[5].nb_diag = nb_diag
            scope.regional_updates[5].dont_hosp = dont_hosp
            scope.regional_updates[5].nb_lit = nb_lit
            scope.regional_updates[5].nb_mort = nb_mort
            scope.regional_updates[5].nb_retab = nb_retab

            //==================
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 46; i <= 53; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[6].nb_diag = nb_diag
            scope.regional_updates[6].dont_hosp = dont_hosp
            scope.regional_updates[6].nb_lit = nb_lit
            scope.regional_updates[6].nb_mort = nb_mort
            scope.regional_updates[6].nb_retab = nb_retab
            //======================
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 54; i <= 58; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[7].nb_diag = nb_diag
            scope.regional_updates[7].dont_hosp = dont_hosp
            scope.regional_updates[7].nb_lit = nb_lit
            scope.regional_updates[7].nb_mort = nb_mort
            scope.regional_updates[7].nb_retab = nb_retab

            //===============================
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 59; i <= 64; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[8].nb_diag = nb_diag
            scope.regional_updates[8].dont_hosp = dont_hosp
            scope.regional_updates[8].nb_lit = nb_lit
            scope.regional_updates[8].nb_mort = nb_mort
            scope.regional_updates[8].nb_retab = nb_retab

            //=============
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 65; i <= 68; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[9].nb_diag = nb_diag
            scope.regional_updates[9].dont_hosp = dont_hosp
            scope.regional_updates[9].nb_lit = nb_lit
            scope.regional_updates[9].nb_mort = nb_mort
            scope.regional_updates[9].nb_retab = nb_retab
            //=====================
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 71; i <= 72; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[10].nb_diag = nb_diag
            scope.regional_updates[10].dont_hosp = dont_hosp
            scope.regional_updates[10].nb_lit = nb_lit
            scope.regional_updates[10].nb_mort = nb_mort
            scope.regional_updates[10].nb_retab = nb_retab
            //==================
            nb_diag = 0
            dont_hosp = 0
            nb_lit = 0
            nb_mort = 0
            nb_retab = 0
            // parseInt
            for (i = 73; i <= 74; i++) {
                nb_diag += parseInt(data[i][2])
                dont_hosp += parseInt(data[i][3])
                nb_lit += parseInt(data[i][4])
                nb_mort += parseInt(data[i][5])
                nb_retab += parseInt(data[i][6])
            }
            scope.regional_updates[11].nb_diag = nb_diag
            scope.regional_updates[11].dont_hosp = dont_hosp
            scope.regional_updates[11].nb_lit = nb_lit
            scope.regional_updates[11].nb_mort = nb_mort
            scope.regional_updates[11].nb_retab = nb_retab
            // console.log(data)
            scope.$apply();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Merci de choisir un fichier Excel Valide")

            $("#loadMe").modal("hide");
            // $("#result").html(jqXHR.responseText);
            // console.log("ERROR : ", jqXHR.responseText);
            // $("#submitButton").prop("disabled", false);

        }
    });

}