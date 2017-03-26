var URL = "https://invitation-sendz.rhcloud.com/";
var loadingScreen;

$(document).ready(function () {
    var token = location.hash.split("#")[1];
    getTokenDetails(token);
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

    window.loadingScreen.finish();
}