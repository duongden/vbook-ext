function execute(url) {
    url = url.replace('m.dawujiasu.com', 'www.dawujiasu.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        let el1 = doc.select(".article_texttitleb").last()
        let el = el1.select("li a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://www.dawujiasu.com"
            })
        }
        return Response.success(data);
    }
    return null;
}