function execute(url) {
    let response = fetch(url + "/");
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select("#list").last()
        let el = el1.select("a")
        const data = [];
        let count = 0;
        if (el.size() > 0)
            count = 0;
        for (let i = count; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "https://www.x33xs4.com" + e.attr("href"),
                host: "https://www.x33xs4.com"
            })
        }
        return Response.success(data);
    }
    return null;
}