function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select(".eplist-content div").last()
                  doc.select("span.uk-float-right").remove()
        let el = el1.select("a")
        const data = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            data.push({
                name: e.select("a span").first().text(),
                url: e.attr("href"),
                host: "https://anhtinh.com"
            })
        }
        return Response.success(data);
    }
    return null;
}