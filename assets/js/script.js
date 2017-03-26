var URL = "https://invitation-sendz.rhcloud.com/"

$(document).ready(function () {
    var token = location.pathname.split("?")[0];
    console.log(token);
    getTokenDetails(token);
});

function getTokenDetails(token) {
    $.get(URL + "auth/" + token, function (data) {
        console.log(data);
    });
}