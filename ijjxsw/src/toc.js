function execute(url) {
	url = url.replace('m.ijjxsw.net', 'www.ijjxsw.net');
    url = url.replace("/txt/","/indexlist/").replace(".html","").replace(".htm","")


    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select(".view_content_list").last()
        let el = el1.select("li a")
        const data = [];
        for (let i = 0;i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url:"http://www.ijjxsw.net" + e.attr("href"),
                host: "http://www.ijjxsw.net"
            })
        }
        return Response.success(data);
    }
    return null;
}