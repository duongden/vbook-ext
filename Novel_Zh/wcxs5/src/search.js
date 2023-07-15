    function execute(key) {
        const doc = fetch('https://www.wcxs5.com/tag/?key=' + key).html();
        const el = doc.select(".container .item")
        const data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("div.item > div > h3 > a").first().text(),
                link: "https://www.wcxs5.com" + e.select(".item a").first().attr("href"),
                cover: "https://www.wcxs5.com" + e.select(".item img").first().attr("src"),
                description: e.select("div.item > div > p:nth-child(3)").first().text(),
                host: "https://www.wcxs5.com"
            })
        }
        return Response.success(data)
    }