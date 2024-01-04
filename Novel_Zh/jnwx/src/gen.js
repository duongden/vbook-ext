function execute(url) {
	url = url.replace('m.jnwx.org', 'www.jnwx.org');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select("#newscontent .l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: "https://www.jnwx.org" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.jnwx.org"
            })
        });
        return Response.success(data)
    }
    return null;
}
