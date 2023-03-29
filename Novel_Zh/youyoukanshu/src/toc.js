function execute(url) {
	url = url.replace('m.youyoukanshu.com', 'www.youyoukanshu.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select(".row ul.list-group").last()
        let el = el1.select("li a")
        const data = [];
        for (let i = 0;i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url:"https://www.youyoukanshu.com" + e.attr("href"),
                host: "https://www.youyoukanshu.com"
            })
        }
        return Response.success(data);
    }
    return null;
}