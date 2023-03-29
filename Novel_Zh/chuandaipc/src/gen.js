function execute(url, page) {
	url = url.replace('m.chuandaipc.com', 'www.chuandaipc.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select("ul.txt-list.txt-list-row5 li").forEach(e => {
            console.log(doc.select("li"))
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.chuandaipc.com"
            })
        });


        return Response.success(data)
    }
    return null;
}