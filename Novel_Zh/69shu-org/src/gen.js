load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(BASE_URL + "/" + url + "_" + page + "/").html();

    var next = doc.select("#pagelink").select("a.next").attr('href').split('_')[1];

    const el = doc.select(".section-cols ul li")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var booKId = e.select(".s2 a").first().attr("href").split('/')[4];
        var fol = booKId.slice(0, -3);
        data.push({
            name: e.select(".s2 a").first().text(),
            link: e.select(".s2 a").first().attr("href"),
            cover: BASE_URL + '/files/article/image/'+fol+'/'+booKId+'/'+booKId+'s.jpg',
            description: e.select(".s4").text(),
            host: BASE_URL
        })
    }

    return Response.success(data, next)
}