var URL = "https://invitation-sendz.rhcloud.com/";
var loadingScreen;

$(document).ready(function () {
    var token = location.hash.split("#")[1];
    getTokenDetails(token);
    loadingScreen = pleaseWait({
        logo: 'assets/img/logo.png',
        backgroundColor: '#f06060',
        loadingHtml: "<div class='sk-spinner sk-spinner-wave'><div class='sk-rect1'></div><div class='sk-rect2'></div><div class='sk-rect3'></div><div class='sk-rect4'></div><div class='sk-rect5'></div></div>"
    });
});

function getTokenDetails(token) {
    $.get(URL + "auth/" + token, function (data) {
        $('#token_name').html(data.name);
        $('#token_location').html(data.address);
        translatePage(data.language);
    });
}

function translatePage(langCode) {
    var langJS = null;


    var translate = function (jsdata) {
        $("[tkey]").each(function (index) {
            var strTr = jsdata[$(this).attr('tkey')];
            $(this).html(strTr);
        });
    }

    if (langCode == 'ID') {
        $.getJSON('assets/js/language/ID.json', translate);
    } else {
        $.getJSON('assets/js/language/EN.json', translate);
    }

    loadingScreen.finish();
}