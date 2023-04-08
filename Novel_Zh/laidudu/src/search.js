function execute(key, page) {
    let response = fetch('https://www.ddyueshu.com/search', {
        method: "GET",
        queries: {
            keyword: key,
            //mysearch
        }
    });

    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
        //#search-main > div.search-list > ul > li:nth-child(2)
        doc.select("div.search-list > ul > li:nth-child(2)").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s4").first().text().replace(/\//g, "").trim(),
                host: "https://www.ddyueshu.com"
            })
        });

        return Response.success(data);
    }
    return null;
}
// name: e.select(".s2 a").first().text(),
// cover: "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png",
// link: e.select(".s2 a").first().attr("href"),
// description: e.select(".s3 a").first().text(),
// host: BASE_URL,