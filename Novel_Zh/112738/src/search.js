load('config.js');
function execute(key) {
    let response = fetch(BASE_URL + '/search2c.html?searchkey=' + key);

    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select(".item").forEach(e => {
            data.push({
                name: e.select("dl dt a").first().text(),
                link: BASE_URL + e.select("dl dt a").first().attr("href"),
                description: e.select(".btm").first().text().replace(/\//g, "").trim(),
                host: BASE_URL
            })
        });
        return Response.success(data);
    }
    return null;
}