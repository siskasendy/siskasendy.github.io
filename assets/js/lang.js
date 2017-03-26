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
