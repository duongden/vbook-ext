function execute(url) {
//	url = url.replace('m.ibiquge.info', 'www.ibiquge.info');
    let response = fetch("https://www.ibiquge.info" + url);
    console.log("https://www.ibiquge.info" + url)
    if (response.ok) {
        let doc = response.html();
        const data = [];

		doc.select(".l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: "https://www.ibiquge.info" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.ibiquge.info"
            })
        });


        return Response.success(data)
    }
    return null;
}