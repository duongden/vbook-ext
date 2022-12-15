function execute(url) {
	url = url.replace('m.dongliuxiaoshuo.com', 'www.dongliuxiaoshuo.com');
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
                url:"https://www.dongliuxiaoshuo.com" + e.attr("href"),
                host: "https://www.dongliuxiaoshuo.com"
            })
        }
        return Response.success(data);
    }
    return null;
}