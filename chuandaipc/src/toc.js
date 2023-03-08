function execute(url) {
    if(url.slice(-1) !== "/")
        url = url + "/";
//	url = url.replace('m.chuandaipc.com', 'www.chuandaipc.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
       
        let el = doc.select("#list").select("li a");
        const data = [];
        for (let i = 0;i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://www.chuandaipc.com"
            })
        }
        return Response.success(data);
    }
    return null;
}
