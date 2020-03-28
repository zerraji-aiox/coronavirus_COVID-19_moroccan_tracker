url = "http://35.189.103.36"
// url = "http://localhost"
port = 80


$.getJSON('https://boogheta.github.io/coronavirus-countries/data/coronavirus-countries.json', function (data) {

    console.log(data)
    // fake_data_char3.dates = data.dates
    fake_data_char3 = data
    // console.log(data_chart3.scopes)
    // world = data.scopes.World.values
    // for (var key in world) {
    //     // console.log(key)
    //     data = { "name": key, "values": world[key].confirmed, added: false }
    //     if (key === "Morocco") {
    //         data.added = true;
    //     }
    //     else
    //     {
    //         continue
    //     }
    //     // if (data_chart3.values.hasOwnProperty(key)) {
    //     //     console.log(key + " -> " + data_chart3.values[key]);
    //     // }
    //     fake_data_char3.pays.push(data)
    //     break;
    // }
    //SORT

    // console.log(fake_data_char3.pays)


});

var fake_data_char3 =
{
    "dates": ["1-1-2020", "2-2-2020", "3-3-2020", "4-4,2020"],
    "pays": [
        { "name": "Maroc", "values": [1, 2, 3, 4] },
        { "name": "PAYS 1", "values": [3, 4, 5, 6] },
        { "name": "PAYS 2", "values": [7, 8, 9, 10] },
        { "name": "PAYS 3", "values": [11, 12, 13, 14] }
    ]
}
https://boogheta.github.io/coronavirus-countries/data/coronavirus-countries.json




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
    $scope.history = false
    $scope.dates = []
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

    $scope.date = new Date()

    $scope.nb_cas = 0
    $scope.nb_cas_real = 0
    $scope.nb_mort = 0
    $scope.nb_lit_dispo = 0
    //STATIC DONT TOUCH
    $scope.actions_added = [
        { "inuse": false, "action": "Fermeture progressive des frontières ", "enabled": false, "date": "12/03/2020" },
        { "inuse": false, "action": "Confinement simple (droits de sortie exceptionnels) avec amende", "enabled": false, "date": "20/03/2020" },
        { "inuse": false, "action": "Fermeture progressive des commerces non nécessaires", "enabled": false, "date": "17/03/2020" },
        { "inuse": false, "action": "Limitation progressive de la mobilité inter-région simple", "enabled": false, "date": "23/03/2020" },
        { "inuse": false, "action": "Fermture des écoles et universités", "enabled": false, "date": "16/03/2020" },
        { "inuse": false, "action": "Interdiction progressive des rassemblements et évènements", "enabled": false, "date": "17/03/2020" },
        { "inuse": false, "action": "Fermeture des lieux de culte ", "enabled": false, "date": "16/03/2020" }
    ]
    $scope.actions_removed = [
        { "id": 1, "inuse": false, "value": "0.1", "action": "Obligation du port du masque ", "enabled": true, "date": "", "added": false },
        { "id": 2, "inuse": false, "value": "0.1", "action": "Quarantaine sévère pour toute personne aillant été en contact avec un malade", "enabled": true, "date": "", "added": false },
        { "id": 3, "inuse": false, "value": "0.1", "action": "Confinement strict ", "enabled": true, "date": "" },
        { "id": 4, "inuse": false, "value": "0.1", "action": "Surveillance des mouvements par borne téléphonique et déploiement des forces de l'ordre", "enabled": true, "date": "" },
        { "id": 5, "inuse": false, "value": "0.1", "action": "Dépistage massif", "enabled": true, "date": "", "added": false },
        { "id": 6, "inuse": false, "value": "0.1", "action": "Notification automatique et anonyme des personnes succeptibles d'avoir croisé une personne ou un lieu infecté (SMS, application)", "enabled": true, "date": "", "added": false },
        { "id": 7, "inuse": false, "value": "0.1", "action": "Sortir du confinement", "enabled": true, "date": "", "added": false }
    ]
    $scope.addAll = function () {
        let tmp = []
        for (let i = 0; i < $scope.actions_removed.length; i++) {
            if ($scope.actions_removed[i].added) {
                $scope.actions_removed[i].added = false;
                tmp.push($scope.actions_removed[i])

                $scope.actions_removed.splice(i, 1)
                i--;
            }
        }
        $scope.actions_added = tmp.concat($scope.actions_added)
        for (let i = 0; i < $scope.actions_added.length; i++) {
            $scope.actions_added[i].added = false;
        }
    }
    $scope.removeAll = function () {
        for (let i = 0; i < $scope.actions_added.length; i++) {
            if ($scope.actions_added[i].added) {
                $scope.actions_added[i].added = false;
                $scope.actions_removed.push($scope.actions_added[i])
                $scope.actions_added.splice(i, 1)
                i--;
            }
        }
        for (let i = 0; i < $scope.actions_removed.length; i++) {
            $scope.actions_removed[i].added = false;
        }
    }

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

    //WITH THE ACTION MODEL (ALLOW ONLY SOME USERS (SEE WITH SOLAIMANE))
    $scope.add_action = function () {
        date = new Date()
        action = ""
        $scope.actions_updates.push({ date: date, action: action })
    }
    $scope.model = function (val) {
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

    var scope = angular.element(document.getElementById('body')).scope()
    for (let k = 0; k < scope.actions_added.length; k++) {
        scope.actions_added[k].inuse = false
    }
    // console.log(estimated)
    // console.log("=")
    // console.log(real)
    var prediction = real.part1
    // dates = real.part2

    var prediction2 = death.part1
    // dates2 = death.part2

    var prediction3 = estimated.part1
    // dates3 = estimated.part2


    let reduction_rate = 0
    let last_increase_rate = 0;
    labels = []
    values = []

    labels_mg = []
    values_mg = []
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
        if (i == 0) {
            values_mg.push(prediction.values[i])
            labels_mg.push(prediction.names[i])
            continue
        }
        //THE TEST IS TO AVOID ANY PROBLEM WITH THE COMPUT BELLOW
        labels_mg.push(prediction.names[i])
        let increase_rate = (prediction.values[i] - prediction.values[i - 1]) / prediction.values[i - 1]
        if (increase_rate > 0.01) {
            last_increase_rate = increase_rate
        }

        for (let j = 0; j < scope.actions_added.length; j++) { //activate any action by date
            if (scope.actions_added[j].date === prediction.names[i]) {
                scope.actions_added[j].inuse = true
            }
        }
        reduction_rate = 0;
        for (let j = 0; j < scope.actions_added.length; j++) { //loop on actions in use and get the real value from excel rules
            if (scope.actions_added[j].inuse) {
                //id 1
                if (scope.actions_added[j].id == 1) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        // if(reduction_rate==0) reduction_rate = 1
                        reduction_rate *= increase_rate * 0.85
                    }
                    else {
                        // if(reduction_rate==0) reduction_rate = 1
                        reduction_rate *= increase_rate * 1.15
                    }
                }
                //id 2
                if (scope.actions_added[j].id == 2) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    //CHECK IF 5 IS IN USE
                    let _depistage_in_use = false
                    for (let k = 0; k < scope.actions_added.length; k++) {
                        if (scope.actions_added[k].inuse && scope.actions_added[k].id == 5) {
                            _depistage_in_use = true
                        }
                    }
                    if (_depistage_in_use && increase_rate >= 0) {

                        reduction_rate *= increase_rate * 0.7
                    }
                    else if (_depistage_in_use && increase_rate < 0) {
                        reduction_rate *= increase_rate * 1.3
                    }
                    else if (!_depistage_in_use && increase_rate >= 0) {
                        reduction_rate *= increase_rate * 0.95
                    }
                    else if (!_depistage_in_use && increase_rate < 0) {
                        reduction_rate *= increase_rate * 1.05
                    }

                }
                //id 3
                if (scope.actions_added[j].id == 3) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        reduction_rate *= increase_rate * 0.6
                    }
                    else {
                        reduction_rate *= increase_rate * 1.4
                    }
                }
                //id 4
                if (scope.actions_added[j].id == 4) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        reduction_rate *= increase_rate * 0.9
                    }
                    else {
                        reduction_rate *= increase_rate * 1.1
                    }
                }
                //id 5
                if (scope.actions_added[j].id == 5) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    //CHECK IF 2 IS IN USE
                    let _quarantaine_in_use = false
                    for (let k = 0; k < scope.actions_added.length; k++) {
                        if (scope.actions_added[k].inuse && scope.actions_added[k].id == 2) {
                            _quarantaine_in_use = true
                        }
                    }
                    if (_quarantaine_in_use && increase_rate >= 0) {
                        reduction_rate *= increase_rate * 0.5
                    }
                    else if (_quarantaine_in_use && increase_rate < 0) {
                        reduction_rate *= increase_rate * 1.5
                    }
                    else if (!_quarantaine_in_use && increase_rate >= 0) {
                        reduction_rate *= increase_rate * 0.7
                    }
                    else if (!_quarantaine_in_use && increase_rate < 0) {
                        reduction_rate *= increase_rate * 1.3
                    }
                }
                //id 6
                if (scope.actions_added[j].id == 6) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        reduction_rate *= increase_rate * 0.8
                    }
                    else {
                        reduction_rate *= increase_rate * 1.2
                    }
                }
                //id 7
                if (scope.actions_added[j].id == 7) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        reduction_rate *= increase_rate * 2
                    }
                    else {
                        reduction_rate *= (increase_rate + last_increase_rate) * 2
                    }
                }

            }
        }
        if (reduction_rate == 0) {
            reduction_rate = increase_rate
        }
        // console.log("date : "+prediction.names[i])
        // console.log("estimated : "+prediction.values[i])
        // console.log("old increase rate : "+increase_rate)
        // console.log("new increase rate : "+reduction_rate)
        // console.log("estimated (SIMULATION) : "+(values_mg[i-1] * (1 + reduction_rate)))

        values_mg.push(values_mg[i - 1] * (1 + reduction_rate))
        if (values_mg > max1) {
            max1 = values_mg[i]
        }
        if (values[i] > max1) {
            max1 = values[i]
        }
    }
    for (let k = 0; k < scope.actions_added.length; k++) {
        scope.actions_added[k].inuse = false
    }



    reduction_rate = 0
    last_increase_rate = 0
    labels2 = []
    values2 = [] //6 valeur
    labels2_mg = []
    values2_mg = []
    // for (let i = 2; i < 6; i++) {
    //     values2.push(dates2.values[i])
    //     labels2.push(dates2.names[i])
    // }
    for (let i = 0; i < prediction2.values.length; i++) {
        // console.log("---")
        // console.log(prediction2.values[i])
        // console.log(prediction2.names[i])
        // values2.push(prediction2.values[i])
        labels2.push(prediction2.names[i])
        labels2_mg.push(prediction2.names[i])

        let deces = values[i]*0.039
        let deces_mg = values_mg[i]*0.039
        if(deces<values2[i-1])
        {
            values2.push(values2[i-1])
        }
        else
        {
            values2.push(deces)
        }

        if(deces_mg<values2_mg[i-1])
        {
            values2_mg.push(values2_mg[i-1])
        }
        else
        {
            values2_mg.push(deces_mg)
        }

        
        //THE TEST IS TO AVOID ANY PROBLEM WITH THE COMPUT BELLOW
        // labels2_mg.push(prediction.names[i])
    }
    //     let increase_rate = (prediction2.values[i] - prediction2.values[i - 1]) / prediction2.values[i - 1]
    //     if (increase_rate > 0.01) {
    //         last_increase_rate = increase_rate
    //     }

    //     for (let j = 0; j < scope.actions_added.length; j++) { //activate any action by date
    //         if (scope.actions_added[j].date === prediction2.names[i]) {
    //             scope.actions_added[j].inuse = true
    //         }
    //     }
    //     reduction_rate = 0;
    //     for (let j = 0; j < scope.actions_added.length; j++) { //loop on actions in use and get the real value from excel rules
    //         if (scope.actions_added[j].inuse) {
    //             //id 1
    //             if (scope.actions_added[j].id == 1) {
    //                 if(reduction_rate==0) {
    //                     reduction_rate = 1
    //                 }
    //                 else{
    //                     reduction_rate = reduction_rate/increase_rate
    //                 }
    //                 if (increase_rate > 0) {
    //                     reduction_rate *= increase_rate * 0.85
    //                 }
    //                 else {
    //                     reduction_rate *= increase_rate * 1.15
    //                 }
    //             }
    //             //id 2
    //             if (scope.actions_added[j].id == 2) {
    //                 if(reduction_rate==0) {
    //                     reduction_rate = 1
    //                 }
    //                 else{
    //                     reduction_rate = reduction_rate/increase_rate
    //                 }
    //                 //CHECK IF 5 IS IN USE
    //                 let _depistage_in_use = false
    //                 if(reduction_rate==0) {
    //                     reduction_rate = 1
    //                 }
    //                 else{
    //                     reduction_rate = reduction_rate/increase_rate
    //                 }
    //                 for (let k = 0; k < scope.actions_added.length; k++) {
    //                     if (scope.actions_added[k].inuse && scope.actions_added[k].id == 5) {
    //                         _depistage_in_use = true
    //                     }
    //                 }
    //                 if (_depistage_in_use && increase_rate >= 0) {
    //                     reduction_rate *= increase_rate * 0.7
    //                 }
    //                 else if (_depistage_in_use && increase_rate < 0) {
    //                     reduction_rate *= increase_rate * 1.3
    //                 }
    //                 else if (!_depistage_in_use && increase_rate >= 0) {
    //                     reduction_rate *= increase_rate * 0.95
    //                 }
    //                 else if (!_depistage_in_use && increase_rate < 0) {
    //                     reduction_rate *= increase_rate * 1.05
    //                 }

    //             }
    //             //id 3
    //             if (scope.actions_added[j].id == 3) {
    //                 if(reduction_rate==0) {
    //                     reduction_rate = 1
    //                 }
    //                 else{
    //                     reduction_rate = reduction_rate/increase_rate
    //                 }
    //                 if (increase_rate > 0) {
    //                     reduction_rate *= increase_rate * 0.5
    //                 }
    //                 else {
    //                     reduction_rate *= increase_rate * 1.5
    //                 }
    //             }
    //             //id 4
    //             if (scope.actions_added[j].id == 4) {
    //                 if(reduction_rate==0) {
    //                     reduction_rate = 1
    //                 }
    //                 else{
    //                     reduction_rate = reduction_rate/increase_rate
    //                 }
    //                 if (increase_rate > 0) {
    //                     reduction_rate *= increase_rate * 0.9
    //                 }
    //                 else {
    //                     reduction_rate *= increase_rate * 1.1
    //                 }
    //             }
    //             //id 5
    //             if (scope.actions_added[j].id == 5) {
    //                 if(reduction_rate==0) {
    //                     reduction_rate = 1
    //                 }
    //                 else{
    //                     reduction_rate = reduction_rate/increase_rate
    //                 }
    //                 //CHECK IF 2 IS IN USE
    //                 let _quarantaine_in_use = false
    //                 for (let k = 0; k < scope.actions_added.length; k++) {
    //                     if (scope.actions_added[k].inuse && scope.actions_added[k].id == 2) {
    //                         _quarantaine_in_use = true
    //                     }
    //                 }
    //                 if (_quarantaine_in_use && increase_rate >= 0) {
    //                     reduction_rate *= increase_rate * 0.5
    //                 }
    //                 else if (_quarantaine_in_use && increase_rate < 0) {
    //                     reduction_rate *= increase_rate * 1.5
    //                 }
    //                 else if (!_quarantaine_in_use && increase_rate >= 0) {
    //                     reduction_rate *= increase_rate * 0.7
    //                 }
    //                 else if (!_quarantaine_in_use && increase_rate < 0) {
    //                     reduction_rate *= increase_rate * 1.3
    //                 }
    //             }
    //             //id 6
    //             if (scope.actions_added[j].id == 6) {
    //                 if(reduction_rate==0) {
    //                     reduction_rate = 1
    //                 }
    //                 else{
    //                     reduction_rate = reduction_rate/increase_rate
    //                 }
    //                 if (increase_rate > 0) {
    //                     reduction_rate *= increase_rate * 0.8
    //                 }
    //                 else {
    //                     reduction_rate *= increase_rate * 1.2
    //                 }
    //             }
    //             //id 7
    //             if (scope.actions_added[j].id == 7) {

    //                 if(reduction_rate==0) {
    //                     reduction_rate = 1
    //                 }
    //                 else{
    //                     reduction_rate = reduction_rate/increase_rate
    //                 }
    //                 if (increase_rate > 0) {
    //                     reduction_rate *= increase_rate * 2
    //                 }
    //                 else {
    //                     reduction_rate *= (increase_rate + last_increase_rate) * 2
    //                 }
    //             }

    //         }
    //     }


    //     if (reduction_rate == 0) {
    //         reduction_rate = increase_rate
    //     }
    //     //values2_mg.push(prediction2.values[i] - prediction2.values[i] * reduction_rate)
    //     values2_mg.push(values2_mg[i - 1] * (1 + reduction_rate))
    // }

    for (let k = 0; k < scope.actions_added.length; k++) {
        scope.actions_added[k].inuse = false
    }
    reduction_rate = 0
    last_increase_rate = 0
    labels3 = []
    values3 = [] //6 valeur
    labels3_mg = []
    values3_mg = []
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
        if (i == 0) {
            values3_mg.push(prediction3.values[i])
            labels3_mg.push(prediction3.names[i])
            continue
        }
        //THE TEST IS TO AVOID ANY PROBLEM WITH THE COMPUT BELLOW
        labels3_mg.push(prediction3.names[i])
        let increase_rate = (prediction3.values[i] - prediction3.values[i - 1]) / prediction3.values[i - 1]
        if (increase_rate > 0.01) {
            last_increase_rate = increase_rate
        }

        for (let j = 0; j < scope.actions_added.length; j++) { //activate any action by date
            if (scope.actions_added[j].date === prediction3.names[i]) {
                scope.actions_added[j].inuse = true
            }
        }
        reduction_rate = 0;
        for (let j = 0; j < scope.actions_added.length; j++) { //loop on actions in use and get the real value from excel rules
            if (scope.actions_added[j].inuse) {
                //id 1
                if (scope.actions_added[j].id == 1) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        reduction_rate *= increase_rate * 0.85
                    }
                    else {
                        reduction_rate *= increase_rate * 1.15
                    }
                }
                //id 2
                if (scope.actions_added[j].id == 2) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    //CHECK IF 5 IS IN USE
                    let _depistage_in_use = false
                    for (let k = 0; k < scope.actions_added.length; k++) {
                        if (scope.actions_added[k].inuse && scope.actions_added[k].id == 5) {
                            _depistage_in_use = true
                        }
                    }
                    if (_depistage_in_use && increase_rate >= 0) {
                        reduction_rate *= increase_rate * 0.7
                    }
                    else if (_depistage_in_use && increase_rate < 0) {
                        reduction_rate *= increase_rate * 1.3
                    }
                    else if (!_depistage_in_use && increase_rate >= 0) {
                        reduction_rate *= increase_rate * 0.95
                    }
                    else if (!_depistage_in_use && increase_rate < 0) {
                        reduction_rate *= increase_rate * 1.05
                    }

                }
                //id 3
                if (scope.actions_added[j].id == 3) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        reduction_rate *= increase_rate * 0.5
                    }
                    else {
                        reduction_rate *= increase_rate * 1.5
                    }
                }
                //id 4
                if (scope.actions_added[j].id == 4) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        reduction_rate *= increase_rate * 0.9
                    }
                    else {
                        reduction_rate *= increase_rate * 1.1
                    }
                }
                //id 5
                if (scope.actions_added[j].id == 5) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    //CHECK IF 2 IS IN USE
                    let _quarantaine_in_use = false
                    for (let k = 0; k < scope.actions_added.length; k++) {
                        if (scope.actions_added[k].inuse && scope.actions_added[k].id == 2) {
                            _quarantaine_in_use = true
                        }
                    }
                    if (_quarantaine_in_use && increase_rate >= 0) {
                        reduction_rate *= increase_rate * 0.5
                    }
                    else if (_quarantaine_in_use && increase_rate < 0) {
                        reduction_rate *= increase_rate * 1.5
                    }
                    else if (!_quarantaine_in_use && increase_rate >= 0) {
                        reduction_rate *= increase_rate * 0.7
                    }
                    else if (!_quarantaine_in_use && increase_rate < 0) {
                        reduction_rate *= increase_rate * 1.3
                    }
                }
                //id 6
                if (scope.actions_added[j].id == 6) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        reduction_rate *= increase_rate * 0.8
                    }
                    else {
                        reduction_rate *= increase_rate * 1.2
                    }
                }
                //id 7
                if (scope.actions_added[j].id == 7) {
                    if (reduction_rate == 0) {
                        reduction_rate = 1
                    }
                    else {
                        reduction_rate = reduction_rate / increase_rate
                    }
                    if (increase_rate > 0) {
                        reduction_rate *= increase_rate * 2
                    }
                    else {
                        reduction_rate += (increase_rate + last_increase_rate) * 2
                    }
                }

            }
        }
        if (reduction_rate == 0) {
            reduction_rate = increase_rate
        }

        // values3_mg.push(prediction3.values[i-1] * (1 + reduction_rate))
        values3_mg.push(values3_mg[i - 1] * (1 + reduction_rate))
        if (values3_mg > max3) {
            max3 = values3_mg[i]
        }
        if (values3[i] > max3) {
            max3 = values3[i]
        }
    }
    for (let k = 0; k < scope.actions_added.length; k++) {
        scope.actions_added.inuse = false
    }
    scope.$apply()



    //add history

    if (scope.history) {

        console.log("==")

        console.log("test")
        console.log(fake_data_char3.dates)
        console.log(fake_data_char3.scopes.World.values.Morocco)

        //remove zero vals
        while (fake_data_char3.scopes.World.values.Morocco.confirmed[0] == 0) {
            fake_data_char3.scopes.World.values.Morocco.confirmed.splice(0, 1)
            fake_data_char3.scopes.World.values.Morocco.deceased.splice(0, 1)
            fake_data_char3.dates.splice(0, 1)
        }

        labels_mg = fake_data_char3.dates.concat(labels_mg)
        labels = fake_data_char3.dates.concat(labels)

        values_mg = fake_data_char3.scopes.World.values.Morocco.confirmed.concat(values_mg)
        values = fake_data_char3.scopes.World.values.Morocco.confirmed.concat(values)

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
    p_mg = {
        label: "cas confirmés (Simulation)",
        // yAxisID: 'real',
        fill: false,
        data: values_mg,
        backgroundColor: [
            'rgb(102, 204, 255)'
        ],
        borderColor: [
            'rgb(102, 204, 255)'
        ],
        borderWidth: 2
    }
    p2_mg = {
        label: "Décès (Simulation)",
        fill: false,
        // yAxisID: 'real',
        data: values2_mg,
        backgroundColor: [
            'rgb(153, 153, 102)'
        ],
        borderColor: [
            'rgb(153, 153, 102)'
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
    p3_mg = {
        label: "cas réels (Simulation)",
        fill: false,
        data: values3_mg,
        // yAxisID: 'estimated',
        backgroundColor: [
            'rgb(255, 102, 0)'
        ],
        borderColor: [
            'rgb(255, 102, 0)'
        ],
        borderWidth: 2
    }
    datasetsList2.push(p)
    datasetsList2.push(p_mg)

    var datasetsList_myChartDeces = []

    datasetsList_myChartDeces.push(p2)
    datasetsList_myChartDeces.push(p2_mg)
    datasetsList3 = []
    datasetsList3.push(p3)
    datasetsList3.push(p3_mg)
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
    $('#myChart1').remove();
    var canvas1 = document.createElement("canvas");
    canvas1.setAttribute("id", "myChart1");
    canvas1.setAttribute("style", "float:left; padding-top: 5%; max-height: 900px;")
    $("#charts1").append(canvas1);


    $('#myChartDeces').remove();
    var canvas_myChartDeces = document.createElement("canvas");
    canvas_myChartDeces.setAttribute("id", "myChartDeces");
    canvas_myChartDeces.setAttribute("style", "float:left; padding-top: 5%; max-height: 900px;")
    $("#charts1").append(canvas_myChartDeces);


    $('#myChart2').remove();
    var canvas2 = document.createElement("canvas");
    canvas2.setAttribute("id", "myChart2");
    canvas2.setAttribute("style", "float:left; padding-top: 5%; max-height: 900px;")
    $("#charts1").append(canvas2);


    var ctx1 = document.getElementById('myChart1');
    // ctx2.innerHTML = '';
    // var myChart1;
    // try
    // {
    //     removeData(myChart2)
    // }
    // catch(e)
    // {

    // }

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



    var ctx_myChartDeces = document.getElementById('myChartDeces');
    // ctx2.innerHTML = '';
    // var myChart1;
    // try
    // {
    //     removeData(myChart2)
    // }
    // catch(e)
    // {

    // }

    var myChart_myChartDeces =

        new Chart(ctx_myChartDeces, {
            type: 'line',
            data: {
                labels: labels2,
                datasets: datasetsList_myChartDeces
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
                labels: labels3,
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
            // console.log(data)
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
            // initMap()
            plotData("ALL")
            //ready();
            var scope = angular.element(document.getElementById('body')).scope()
            $("#region").val("ALL");
            // getRecommandation(scope.data)
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
    scope.dates = estimated.part2.names
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
setTimeout(function () { getData(); }, 3000);