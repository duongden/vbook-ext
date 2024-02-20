load('config.js');
function execute(url) {
    let response = fetch(BASE_URL + url);
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


        return Response.success(data)
    }
    return null;
}