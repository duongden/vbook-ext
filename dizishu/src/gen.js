function execute(url, page) {
	url = url.replace('m.dizishu.com', 'www.dizishu.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select(".update-table tbody tr").forEach(e => {
            data.push({
                name: e.select("a.name").first().text(),
                link: e.select("a.section").first().attr("href"),
                description: e.select("a.author").first().text(),
                host: "http://www.dizishu.com"
            })
        });


        return Response.success(data)
    }
    return null;


}