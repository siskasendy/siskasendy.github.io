var URL = "https://invitation-sendz.rhcloud.com/"

$(document).ready(function () {
    var token = location.hash.split("#")[1];
    getTokenDetails(token);
});

function getTokenDetails(token) {
    $.get(URL + "auth/" + token, function (data) {
        $('#token_name').html(data.name);
        console.log(data);
    });
}