load('libs.js');

function execute(url) {
    var host = 'https://www.biquge.co';
    url = url.replace('m.biquge.co', 'www.biquge.co').append('/');
    var doc = Http.get(url).html('gbk');

    var author = $.Q(doc, '#info p').text().replace(/作.*者：/, '');
    var lastUpdated = $.Q(doc, '#info > p:nth-child(4)').text();

    return Response.success({
        name: $.Q(doc, '#info > h1').text(),
        cover: $.Q(doc, '#fmimg img').attr('src'),
        author: author,
        description: $.Q(doc, '#intro').text(),
        detail: String.format('作者: {0}<br>{1}', author, lastUpdated),
        host: host
    });
}