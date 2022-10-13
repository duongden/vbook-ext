function execute(url) {
	url = url.replace('m.piaotian.la', 'www.piaotian.la');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select("#list").last()
        let el = el1.select("dd a")
        const data = [];
        for (let i = 12;i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: url + "/"+ e.attr("href"),
                host: "http://www.piaotian.la"
            })
        }
        return Response.success(data);
    }
    return null;
}