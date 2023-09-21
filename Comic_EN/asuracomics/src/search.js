function execute(key, page) {
    if (!page) page = 1;
    let response = fetch('https://asuracomics.com/page/' + page + "?s=" + key);

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
                host: "https://asuracomics.com"
            })
        });
        // Extract the next page link and parse it to get the page number
        // let nextPageLink = doc.select(".hpage a.r").last().attr("href");
        // let next = null;

        // if (nextPageLink) {
        //     const match = nextPageLink.match(/page=(\d+)/);
        //     if (match && match[1]) {
        //         next = match[1];
        //     }
        // }
        return Response.success(data, next)
    }
    return null;
}