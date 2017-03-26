var URL = "http://invitation-sendz.rhcloud.com/"

$(document).ready(function () {
    var token = location.pathname.split("/")[2];

});

function getTokenDetails(token) {
    $.get(URL + "auth/" + token, function (data) {
        console.log(data);
    });
}