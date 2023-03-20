load('libs.js');

function execute(url) {
    url = url.replace('wap.9itan.com', 'www.9itan.com');
    var host = 'https://www.9itan.com';
    url = url.replace('wap.9itan.com', 'www.9itan.com').append('/');
    var doc = Http.get(url).html('gbk');

    var data = [];
    var elems = $.QA(doc, '.ml_list li > a');
    if (!elems.length) return Response.error(url);
    
    elems.forEach(function(e) {
        data.push({
            name: e.text(),
            url: e.attr('href').mayBeFillHost(url),
            host: host,
        })
    });

    return Response.success(data);
}