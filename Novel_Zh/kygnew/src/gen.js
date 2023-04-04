function execute(url) {
	url = url.replace('m.kygnew.com', 'www.kygnew.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];

		doc.select(".l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.kygnew.com"
            })
        });


        return Response.success(data)
    }
    return null;
}