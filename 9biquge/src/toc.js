function execute(url) {
    let response2 = fetch(url);
    if (response2.ok) {
        let doc = response2.html();
        const data = [];
        let el1 = doc.select("#list").last().select("dd a");
        for (let i = 12; i < el1.size(); i++) {
            var e = el1.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://www.9biquge.com"
            })
        }
        return Response.success(data);
    }
    return null;
}
