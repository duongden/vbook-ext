function execute(url, page) {
	url = url.replace('m.dongliuxiaoshuo.com', 'www.dongliuxiaoshuo.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select("tbody tr").forEach(e => {
            if(e.select("a").first().text() !== null && e.select("a").first().text() !== '') {
                data.push({
                    name: e.select("td a").first().text(),
                    link: e.select("td a").first().attr("href"),
                    description: e.select("td a").get(1).text(),
                    host: "https://www.dongliuxiaoshuo.com"
                })
            }
        });


        
        return Response.success(data)
    }
    return null;
}