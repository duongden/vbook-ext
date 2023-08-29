// load('libs.js');

function execute(url) {
    url = url.replace('m.9itans.com', 'www.9itans.com');
    var host = 'https://www.9itans.com';
    url = url.replace('m.9itans.com', 'www.9itans.com').append('/');
    var doc = Http.get(url).html('gbk');

    var author = $.Q(doc, '.introduce a[href*="author"]').text();
    var lastUpdated = $.Q(doc, '.bq > span').text();
    var newChap = $.Q(doc, '.bq > span:nth-child(3)').text();

    return Response.success({
        name: $.Q(doc, '.introduce > h1').text(),
        cover: 'https://www.9itans.com/modules/article/images/nocover.jpg',
        author: author,
        description: $.Q(doc, '.jj').html(),
        detail: lastUpdated + '<br>' + newChap,
        host: host
    });
}

