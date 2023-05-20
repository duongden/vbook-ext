function execute(key, page) {
    let response = fetch('http://www.dubuxiaoshuo.com/plus/search.php?q=', {
        method: "GET",
        queries: {
            q: key,
            //mysearch
        }
    });

    if (response.ok) {
        let doc = response.html();
        const data = [];
//body > div:nth-child(3) > div > div.panel-body > table > tbody > tr:nth-child(1) > td:nth-child(1)
        doc.select("tbody tr").forEach(e => {
            data.push({
                name: e.select(".orange").first().text(),
                link: e.select(".orange").first().attr("href"),
                description: e.select("td:nth-child(2)").first().text(),
                host: "http://www.dubuxiaoshuo.com"
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