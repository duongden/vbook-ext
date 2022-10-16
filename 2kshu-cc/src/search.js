function execute(key, page) {
    let response = fetch('https://www.2kshu.cc/search.html?key='+key);

    if (response.ok) {
        let doc = response.html();
        const data = [];       
		doc.select("#newscontent .l li").forEach(e => {
            let name = e.select(".s2 a").first().text();
            if (name.length !== 0) {
                data.push({
                    name: name,
                    link: e.select(".s2 a").first().attr("href"),
                    description: e.select(".s3 a").first().text(),
                    host: "http://www.2kshu.cc"
                })
            }
        });

        return Response.success(data);
    }
    return null;
}