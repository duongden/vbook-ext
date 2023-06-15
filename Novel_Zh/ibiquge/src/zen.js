function execute(url, page) {
	url = url.replace('m.ibiquge.info', 'www.ibiquge.info');
    if (!page) page = '1';
    let response = fetch("https://www.ibiquge.info" + url + page + ".html");
    console.log("https://www.ibiquge.info" + url + page + ".html")
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select("#newscontent .l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: "https://www.ibiquge.info" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.ibiquge.info"
            })
        });

        let next = parseInt(page,10)+1;
        return Response.success(data, next.toString());
    }
    return null;
}
