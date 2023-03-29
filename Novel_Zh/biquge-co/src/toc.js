
load('libs.js');

function execute(url) {
    var host = 'https://www.biquge.co';
    url = url.replace('m.biquge.co', 'www.biquge.co').append('/');
    var doc = Http.get(url).html('gbk');

    var data = [];
    var elems = $.QA(doc, '#list a');
    if (!elems.length) return Response.error(url);

    if (elems.length >= 12 * 2) {
        elems.splice(0, 9); // Remove first 12 items
    } else {
        elems.splice(0, elems.length / 2);
    }

    elems.forEach(function (e) {
        data.push({
            name: $.Q(e, 'a').text(),
            url: e.attr('href').mayBeFillHost(url), // Important
            host: host
        })
    })

    return Response.success(data);
}