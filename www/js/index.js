document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
     $('#showArticle').click(function (e) {
         e.preventDefault();
         personManager.showDetails();



});


var personManager = {

    showDetails: function (id) {
        if (id == null) return;
        $('#personSearchPanel').hide();
        $.ajax({
            url: "http://10.0.2.2:5557/lionceaux/", // La ressource ciblée, pour Android utiliser http://10.0.2.2:5556/personnes/
            type: "GET", // Le type de la requête HTTP,
            cache: false, // n'enregistre pas temporairement des copies de données
            dataType: 'json', //  Le type de données à recevoir, ici, du json
            success: function (data) {
                console.log(data);
                $.each(data, function (index, lionceau) {

                    $('#titreArt').text('value', lionceau.libelle),
                        $('#imgArt').attr('src', lionceau.urlPhotoPr),
                        $('#descripArt').text('src', lionceau.description1)

                })

            }
        });
    }


}