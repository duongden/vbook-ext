load('config.js');
function execute(key, page) {
    let response = fetch(BASE_URL + '/searchb6.html', {
        method: "GET",
        queries: {
            keyword: key,
            //mysearch
        }
    });

    if (response.ok) {
        let doc = response.html();
        const data = [];

        doc.select(".item").forEach(e => {
            data.push({
                name: e.select("dl dt a").first().text(),
                link: e.select("dl dt a").first().attr("href"),
                cover: e.select(".image a img").attr("data-original"),
                description: e.select(".btm").first().text().replace(/\//g, "").trim(),
                host: BASE_URL
            })
        });

        return Response.success(data);
    }
    return null;
}