function execute(url, page) {
	url = url.replace('m.paozww.com', 'www.paozww.com');
    if(!page) page = '1';

    let response = fetch(url+"/"+page+"/");
    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next = doc.select("a:contains(>>)").first().attr("href").slice(0, -1).split(/[/ ]+/).pop()
		doc.select("#newscontent .l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.paozww.com"
            })
        });


        return Response.success(data,next)
    }
    return null;
}