function execute(url, page) {
    if (!page) page = 1;
    let response = fetch("https://www.readlightnovel.me" + url + "/" + page);
   // console.log("https://www.readlightnovel.me" + url)
    if (response.ok) {
        let doc = response.html();
        let next = doc.select('.pagination').first().select('li.active + li').text();
        const data = [];
		doc.select(".col-lg-12 .top-novel-block").forEach(e => {
            data.push({
                name: e.select("h2 a").first().text(),
                link: e.select("h2 a").first().attr("href"),
                cover: e.select(".top-novel-cover img").first().attr("src"),
                description: "Author: " + e.select("div.top-novel-content > div.top-novel-body > div:nth-child(1) > div.content > a").first().text(),
                host: "https://www.readlightnovel.me"
            })
        });
        return Response.success(data,next)
    }
    return null;
}