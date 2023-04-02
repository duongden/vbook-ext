function execute(url) {
    if (url.slice(-1) !== "/")
        url = url + "/";
    url = url.replace('m.ddyueshu.com', 'www.ddyueshu.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        //let linkurl = doc.select('meta[property="og:url"]').attr("content")
        let el = doc.select("#list").last().select("dd a")
        const data = [];
        for (let i = 6; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://www.ddyueshu.com"
            })
        }
        return Response.success(data);
    }
    return null;
}