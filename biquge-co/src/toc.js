load('libs.js');

function execute(url) {
    var host = 'https://www.biquge.co';
    url = url.replace('m.biquge.co', 'www.biquge.co').append('/');
    var doc = Http.get(url).html('gbk');

    var data = [];
    var elems = $.QA(doc, '#list dd a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: host,
        })
    });

    return Response.success(data);
}