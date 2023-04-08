function execute(url) {
	url = url.replace('m.laidudu.org', 'www.laidudu.org');
    let response = fetch("https://www.laidudu.org" + url);
    console.log("https://www.laidudu.org" + url)
    if (response.ok) {
        let doc = response.html();
        const data = [];

		doc.select(".l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.laidudu.org"
            })
        });


        return Response.success(data)
    }
    return null;
}