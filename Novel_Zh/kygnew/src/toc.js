function execute(url) {
    url = url.replace('m.kygnew.com', 'www.kygnew.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select(".listmain").last()
        let el = el1.select("dd a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://www.kygnew.com"
            })
        }
        return Response.success(data);
    }
    return null;
}