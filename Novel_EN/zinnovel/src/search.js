   function execute(key, page) {
    if (!page) page = 1;
    let response = fetch("https://zinnovel.com/page/" + page + "/?s=" + key + "&post_type=wp-manga");
    if (response.ok) {
        let doc = response.html();
        let next = doc.select('.wp-pagenavi').first().select('span.current + a').text();
        const data = [];

		doc.select(".c-tabs-item__content").forEach(e => {
            data.push({
                name: e.select(".h4 a").first().text(),
                link: e.select(".h4 a").first().attr("href"),
                cover: e.select(".c-image-hover img").first().attr("data-src"),
                description: e.select(".total_votes").first().text(),
                host: "https://zinnovel.com"
            })
        });
        return Response.success(data,next)
    }
    return null;
}