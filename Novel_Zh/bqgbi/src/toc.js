function execute(url) {

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select(".listmain").last()
        doc.select("dd.more").remove();
        let el = el1.select("dd a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            
            data.push({
                name: e.select("a").text(),
                url: "https://www.bqgbi.com" + e.attr("href"),
                host: "https://www.bqgbi.com"
            })
        }
        return Response.success(data);
    }
    return null;
}