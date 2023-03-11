load('libs.js');

function execute(url) {
    url = url.replace('m.9itan.com', 'www.9itan.com');
    var doc = Http.get(url).html('gbk');
    var htm = $.Q(doc, '#articlecontent').html();

    htm = cleanHtml(htm);
    // log(htm);

    return Response.success(htm.replace(/<br\s*\/?>|\n/g,"<br><br>"));
}