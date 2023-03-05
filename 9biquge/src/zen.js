load('config.js');

function execute(url, page) {
    if (!page) page = '1';
    if (url.slice(-1) !== "/")
        url = url + "/";
        url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    console.log(url + page + ".html")
    let response = fetch(url + page);

    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next = doc.select("a:contains(下一页)").first().attr("href").split(/[/ ]+/).pop()
        doc.select("#newscontent .l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                cover: "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png",
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: BASE_URL,
            })
        });


        return Response.success(data, next)
    }
    return null;
}