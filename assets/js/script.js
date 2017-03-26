var URL = "https://invitation-sendz.rhcloud.com/";
var langCode = "";

$(document).ready(function () {
    var token = location.hash.split("#")[1];
    getTokenDetails(token);
});

function getTokenDetails(token) {
    $.get(URL + "auth/" + token, function (data) {
        $('#token_name').html(data.name);
        langCode = data.language;
        console.log(data);
    });
}