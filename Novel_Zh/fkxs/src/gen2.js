load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    //#newscontent > div.l > ul > li
    let response = fetch(BASE_URL + url);
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
        doc.select("#newscontent > div.l > ul > li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text().replace("《", '"').replace("》", '"'),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s5").first().text(),
                host: BASE_URL
            })
        });
    return Response.success(data)
    }
    return null;
}