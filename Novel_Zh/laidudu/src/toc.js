function execute(url) {
    url = url.replace('m.xlaidudu.net', 'www.xlaidudu.net');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select(".listmain").last().select("dd a")
        const data = [];
        for (let i = 12; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "https://www.xlaidudu.net" + e.attr("href"),
                host: "https://www.xlaidudu.net"
            })
        }
        return Response.success(data);
    }
    return null;
}