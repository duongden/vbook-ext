function execute(url) {
    url = url.replace('m.laidudu.org', 'www.laidudu.org');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select(".listmain").last().select("dd a")
        const data = [];
        for (let i = 12; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "https://www.laidudu.org" + e.attr("href"),
                host: "https://www.laidudu.org"
            })
        }
        return Response.success(data);
    }
    return null;
}