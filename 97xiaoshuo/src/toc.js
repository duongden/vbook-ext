function execute(url) {
    if (url.slice(-1) !== "/")
        url = url + "/";
    url = url.replace("m.97xiaoshuo.net", "www.97xiaoshuo.net");
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        //let linkurl = doc.select('meta[property="og:url"]').attr("content")
        let el = doc.select("#list").last().select("dd a")
        const data = [];
        for (let i = 12; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://www.97xiaoshuo.net"
            })
        }
        return Response.success(data);
    }
    return null;
}