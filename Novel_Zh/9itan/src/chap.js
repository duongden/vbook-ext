load('libs.js');

function execute(url) {
    url = url.replace('m.9itans.com', 'www.9itans.com');
    var doc = Http.get(url).html('gbk');
    var htm = $.Q(doc, '#articlecontent').html();

    htm = cleanHtml(htm);
    // log(htm);

    return Response.success(htm.replace(/<br\s*\/?>|\n/g,"<br><br>"));
}