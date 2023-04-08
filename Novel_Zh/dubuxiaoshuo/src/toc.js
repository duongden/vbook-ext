function execute(url) {
    url = url.replace('m.dubuxiaoshuo.com', 'www.dubuxiaoshuo.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select("#all-chapter .panel-body .row").last().select("a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "http://www.dubuxiaoshuo.com" + e.attr("href"),
                host: "http://www.dubuxiaoshuo.com"
            })
        }
        return Response.success(data);
    }
    return null;
}