function execute(key, page) {
    if (!page) page = 1;
    let response = fetch('https://asuratoon.com/page/' + page + "?s=" + key);

    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next = doc.select('.pagination').first().select('span.current + a').text();
		doc.select(".listupd .bs").forEach(e => {
            data.push({
                name: e.select(".tt").first().text(),
                link: e.select(".bsx a").first().attr("href"),
                cover: e.select(".limit img.ts-post-image").first().attr("src"),
                description: "Score: " + e.select(".numscore").first().text(),
                host: "https://asuratoon.com"
            })
        });
        return Response.success(data, next)
    }
    return null;
}