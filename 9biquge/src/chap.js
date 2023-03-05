load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

        let htm = doc.select("#content p.content_detail").html();
        console.log("blacktea");
        htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '')
            .replace(/ ?\n/g, "<br>")
            .replace(/<\/?p>/g, "")
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace("一秒记住http：//m.9biquge.com", '')
            .replace("记住网址ｍ.9bｉquge．ｃom", '')
            .replace("一秒记住http：//m.9biquge.com", '')
            .replace("首发网址ｍ.9ｂiquｇe。com", '')
            .replace(htmlRegexG, '');
        return Response.success(htm);
    }
    return null;
}
