function execute(url, page) {
    if (!page) {
        page = '1';
    }

    let response = fetch("https://www.zrfsxs.com" + url + "1-" + page + ".html");
    console.log("https://www.zrfsxs.com" + url + "1-" + page + ".html")
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select(".container .item").forEach(e => {
            data.push({
                name: e.select("h3").first().text(),
                link: "https://www.zrfsxs.com" + e.select("h3 a").first().attr("href"),
                cover: "https://www.zrfsxs.com" + e.select(".item img").first().attr("src"),
                description: e.select("div > p:nth-child(3)").first().text(),
                host: "https://www.zrfsxs.com"
            })
        });

        let next = doc.select("a:contains(下一页)").attr("href").split(/[- ]+/).pop().replace(".html","").replace(".htm","")
        console.log(next)

        return Response.success(data, next)
    }
    return null;
}