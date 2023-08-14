load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = Http.get(url).html();

    var el = doc.select("ul.chapterlist a")
    const data = [];
    for (var i = 12;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: url+'/'+e.attr("href"),
            host: BASE_URL
        })
    }

    return Response.success(data);
}