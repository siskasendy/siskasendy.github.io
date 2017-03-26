var langs = ['EN', 'ID'];
var langCode = '';
var langJS = null;


var translate = function (jsdata) {
    $("[tkey]").each(function (index) {
        var strTr = jsdata[$(this).attr('tkey')];
        $(this).html(strTr);
    });
}


langCode = navigator.language.substr(0, 2);

if (langCode in langs)
    $.getJSON('assets/js/language/' + langCode + '.json', translate);
else
    $.getJSON('assets/js/language/EN.json', translate);
