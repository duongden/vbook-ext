function execute(url) {
    var doc = Http.get(url).html();
    doc.select(".ad_content").remove();
    doc.select("#center_tip").remove();
    doc.select("b").remove();
    var htm = doc.select("#content").html();

    htm = htm.replace('请记住本书首发域名：www.ishuquge.la.ishuquge.la','');
    htm = htm.replace(/https\:\/\/www\.ishuquge.la\/txt\/\d+\/\d+.html/g,'');
    htm = htm.replace('请记住本书首发域名：www.ishuquge.la。书趣阁手机版阅读网址：wap.ishuquge.la','');
    htm = htm.replace(url,'');
    htm = htm.replace(/(<br>\s*){2,}/g, '<br>');
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    htm = htm.replace(/<!--(<br \/>)?[^>]*-->/gm, '');
    htm = htm.replace(/\&nbsp;/g, "");
    return Response.success(htm);
}