function execute(url, page) {
    if(!page) page = '1';
    let response = fetch("https://www.bqgbi.com/json?sortid=" + url + "&page=" + page);
    if (response.ok) {
        let doc = response.json();
        const data = [];
		doc.forEach(e => {
            data.push({
                name: e.articlename,
                link: e.url_list,
                cover: e.url_img,
                description: e.author,
                host: "https://www.bqgbi.com"
            })
        });
		if (data.length === 0) {
			doc.select(".hot div.item").forEach(e => {
                data.push({
                    name: e.select("dt a").last().text(),
                    cover: e.select(".image img").first().attr("src"),
                    link: e.select("dt a").first().attr("href"),
                    description: e.select("dt span").first().text(),
                    host: "https://www.bqgbi.com"
                })
            }
            );
		}
        let next = (parseInt(page) + 1).toString();
        return Response.success(data,next)
    }
    return null;
}