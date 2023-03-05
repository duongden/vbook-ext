load('config.js');

function execute(url) {
    if (url.slice(-1) !== "/")
        url = url + "/";
        url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        //let linkurl = doc.select('meta[property="og:url"]').attr("content")
        let el = doc.select("#list").last().select("dd a")
        const data = [];
        for (let i = 12; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: BASE_URL,
            })
        }
        return Response.success(data);
    }
    return null;
}