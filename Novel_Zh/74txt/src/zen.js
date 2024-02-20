load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL + url + page + ".html");
    console.log(BASE_URL + url + page + ".html")
    if (response.ok) {
        let doc = response.html();
        const data = [];
		doc.select(".left ul.update li").forEach(e => {
            data.push({
                name: e.select("a").get(0).text(),
                link: e.select("a").get(0).attr("href"),
                description: e.select("span").get(1).text(),
                host: BASE_URL
            })
        });
        let next = doc.select("a:contains(>>)").first().attr("href").split(/[_]+/).pop().replace(".html","").replace(".htm","")
        return Response.success(data, next)
    }
    
    return null;
}