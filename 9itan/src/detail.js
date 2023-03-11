load('libs.js');

function execute(url) {
    url = url.replace('m.9itan.com', 'www.9itan.com');
    var host = 'https://www.9itan.com';
    url = url.replace('m.9itan.com', 'www.9itan.com').append('/');
    var doc = Http.get(url).html('gbk');

    var author = $.Q(doc, '.introduce a[href*="author"]').text();
    var lastUpdated = $.Q(doc, '.bq > span').text();

    return Response.success({
        name: $.Q(doc, '.introduce > h1').text(),
        cover: 'https://www.9itan.com/modules/article/images/nocover.jpg',
        author: author,
        description: $.Q(doc, '.jj').text(),
        detail: String.format('作者: {0}<br>{1}', author, lastUpdated),
        host: host
    });
}