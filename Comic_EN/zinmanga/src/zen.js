function execute(url, page) {
    if (!page) page = 1;
    const doc = Http.get("https://zinmanga.com/manga-genre" + url).params({paged: page}).html();
const el = doc.select(".page-item-detail")
const data = [];
for (var i = 0; i < el.size(); i++) {
    var e = el.get(i);
    data.push({
        name: e.select(".h5 a").first().text(),
        link: e.select(".h5 a").first().attr("href"),
        cover: e.select(".c-image-hover img").first().attr("data-src"),
        description: e.select(".total_votes").first().text(),
        host: "https://zinmanga.com"
    })
}
        var next = (parseInt(page)+1).toString();
        return Response.success(data,next)
}