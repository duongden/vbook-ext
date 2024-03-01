load('config.js');
function execute(url, page) {
    if(!page) page = '2';
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    //#newscontent > div.l > ul > li
    let response = fetch(BASE_URL + url + page + ".html");
    console.log(BASE_URL + url + page + ".html")
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
        let next = parseInt(page, 10) + 1
        return Response.success(data, next.toString())
    }
    return null;
}