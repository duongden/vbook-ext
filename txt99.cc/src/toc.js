function execute(url) {
	url = url.replace('m.txt99.cc', 'www.txt99.cc');
    url = url.replace("/txt/","/read/").replace(".html","").replace(".htm","")


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
                url:"http://www.txt99.cc" + e.attr("href"),
                host: "http://www.txt99.cc"
            })
        }
        return Response.success(data);
    }
    return null;
}