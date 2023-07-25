function execute(url) {
//	url = url.replace('m.ibiquzw.com', 'www.ibiquzw.com');
    let response = fetch("https://www.ibiquzw.com" + url);
    console.log("https://www.ibiquzw.com" + url)
    if (response.ok) {
        let doc = response.html();
        const data = [];

		doc.select(".l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: "https://www.ibiquzw.com" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.ibiquzw.com"
            })
        });


        return Response.success(data)
    }
    return null;
}