load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = Http.get(url).html();
    doc.select(".ad_content").remove();
    var htm = doc.select(".contentbox").html();
    htm = htm.substring(htm.indexOf('<br>'));
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '');
    htm = htm.replace("69书吧 www.69shu.us，最快更新","")
    htm = htm.replace("最新章节！","")
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    return Response.success(htm);
}