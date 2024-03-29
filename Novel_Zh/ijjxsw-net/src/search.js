load('config.js');
function execute(key) {
    let response = fetch(BASE_URL + '/search0a.html?searchkey=', {
        method: "GET",
        queries: {
            searchkey: key,
        }
    });
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select(".item").forEach(e => {
            data.push({
                name: e.select("dl dt a").first().text(),
                link: BASE_URL + e.select("dl dt a").first().attr("href"),
                cover: e.select(".image img").first().attr("data-original"),
                description: e.select(".btm a").first().text().trim(),
                host: BASE_URL
            })
        });
        return Response.success(data);
    }
    return null;
}