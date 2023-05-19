function execute(key, page) {
    let response = fetch('https://www.xlaidudu.net/read/search/', {
        method: "POST",
        queries: {
            searchkey: key,
            //mysearch
        }
    });

    if (response.ok) {
        let doc = response.html();
        const data = [];
        //#search-main > div.search-list > ul > li:nth-child(2)
        doc.select(".type_show .bookbox").forEach(e => {
            data.push({
                name: e.select("h4 a").first().text(),
                link: e.select("h4 a").first().attr("href"),
                cover: "https://www.xlaidudu.net" + e.select(".bookimg img").first().attr("src"),
                description: e.select(".author").first().text().replace(/\//g, "").trim(),
                host: "https://www.xlaidudu.net"
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