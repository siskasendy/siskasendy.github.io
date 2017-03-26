var URL = "https://invitation-sendz.rhcloud.com/";
$(document).ready(function () {
    var token = location.hash.split("#")[1];
    getTokenDetails(token);
});

function getTokenDetails(token) {
    $.get(URL + "auth/" + token, function (data) {
        $('#token_name').html(data.name);
        $('#token_location').html(data.address);
        translatePage(data.language);
        console.log(data);
    });
}

function translatePage(langCode) {
    var langs = ['EN', 'ID'];
    var langJS = null;


    var translate = function (jsdata) {
        $("[tkey]").each(function (index) {
            var strTr = jsdata[$(this).attr('tkey')];
            $(this).html(strTr);
        });
    }

    console.log(langCode);

    if (langCode in langs)
        $.getJSON('assets/js/language/' + langCode + '.json', translate);
    else
        $.getJSON('assets/js/language/EN.json', translate);
}