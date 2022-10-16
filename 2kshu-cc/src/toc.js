function execute(url) {
	url = url.replace('m.2kshu.cc', 'www.2kshu.cc');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select("#chapter_list").last()
        let el = el1.select("li a")
        const data = [];
        for (let i = 0;i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url:"http://www.2kshu.cc" + e.attr("href"),
                host: "http://www.2kshu.cc"
            })
        }
        return Response.success(data);
    }
    return null;
}