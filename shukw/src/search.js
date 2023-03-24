function execute(key, page) {
    let response = fetch('https://www.shukw.com/search/', {
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
                link: e.select("dl dt a").first().attr("href"),
                description: e.select("dl dd").first().text().replace(/\//g, "").trim(),
                host: "https://www.shukw.com"
            })
        });

        return Response.success(data);
    }
    return null;
}