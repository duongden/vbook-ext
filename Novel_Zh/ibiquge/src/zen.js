function execute(url, page) {
	url = url.replace('m.ibiquzw.com', 'www.ibiquzw.com');
    if (!page) page = '1';
    let response = fetch("https://www.ibiquzw.com" + url + page + ".html");
    console.log("https://www.ibiquzw.com" + url + page + ".html")
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select("#newscontent .l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: "https://www.ibiquzw.com" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.ibiquzw.com"
            })
        });

        let next = parseInt(page,10)+1;
        return Response.success(data, next.toString());
    }
    return null;
}
