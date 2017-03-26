var URL = "https://invitation-sendz.rhcloud.com/"

$(document).ready(function () {
    var token = location.hash.split("#")[1];
    console.log(location);
    console.log(token);
    getTokenDetails(token);
});

function getTokenDetails(token) {
    $.get(URL + "auth/" + token, function (data) {
        console.log(data);
    });
}