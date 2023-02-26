load('libs.js');

function execute(url) {
    url = url.replace('m.biquge.co', 'www.biquge.co');
    var doc = Http.get(url).html('gbk');
    var htm = $.Q(doc, '#content').html();
    console.log("blacktea");
    htm = cleanHtml(htm);
    // log(htm);

    return Response.success(htm);
}