function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select("#list li a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "https://www.wcxs5.com" + e.attr("href"),
                host: "https://www.wcxs5.com"
            })
        }
        return Response.success(data);
    }
    return null;
}