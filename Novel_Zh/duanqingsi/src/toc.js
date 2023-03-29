function execute(url) {
	url = url.replace('m.duanqingsi.com', 'www.duanqingsi.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select(".section-box").last();
        let el = el1.select("li a")
        const data = [];
        for (let i = 0;i < el.size(); i++) {
            var e = el.get(i)
            data.push({
                name: e.select("a").text(),
                url:"https://www.duanqingsi.com" + e.attr("href"),
                host: "https://www.duanqingsi.com"
            })
        }
        return Response.success(data);
    }
    return null;
}