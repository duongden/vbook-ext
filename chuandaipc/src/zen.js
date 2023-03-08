function execute(url, page) {
    if(!page) page = '1';
    if(url.slice(-1) !== "/")
        url = url + "/";
	url = url.replace('m.chuandaipc.com', 'www.chuandaipc.com');
        console.log(url+page+".html")
    let response = fetch(url+page+".html");

    if (response.ok) {
        let doc = response.html();
        const data = [];
       let next = doc.select("a:contains(>>)").first().attr("href").slice(0, -1).split(/[/ ]+/).pop()
		doc.select(".am-g.am-g-collapse .book-list-1").forEach(e => {
            data.push({
                name: e.select(".book-list-1-info h4").first().text(),
                link: e.select(".book-list-1-info h4 a").first().attr("href"),
                description: e.select(".book-list-1-info .book-list-1-intro").first().text(),
                host: "https://www.chuandaipc.com"
            })
        });


        return Response.success(data,next)
    }
    return null;
}