load('config.js');
function execute(url, page) {
    if(!page) page = '1';
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(BASE_URL + url + page + ".html");
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];

		doc.select(".novel_box").forEach(e => {
                data.push({
                    name: e.select(".novel_name a").first().text(),
                    cover: e.select(".pic img").first().attr("src"),
                    link: e.select(".novel_name a").first().attr("href"),
                    description: e.select(".novel_author a").text(),
                    host: BASE_URL
                })
        });
        let next = doc.select("a:contains(下一页)").first().attr("href").slice(0, -1).split(/[/ ]+/).pop().replace(".html","").replace(".htm","")
        return Response.success(data, next)
    }
    return null;
}