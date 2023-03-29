function execute(key, page) {
    let response = fetch('https://www.youyoukanshu.com/search.php', {
        method: "GET",
        queries: {
            searchkey: key,
        }
    });

    if (response.ok) {
        let doc = response.html();
        const data = [];

        doc.select(".item").forEach(e => {
            data.push({
                name: e.select(".media-body h4.media-heading").first().text(),
                link: e.select(".media-body h4.media-heading a").first().attr("href"),
                cover: e.select(".media img").first().attr("src"),
                description: e.select("h5.text-muted").first().text(),
                host: "https://www.youyoukanshu.com"
            })
        });

        return Response.success(data);
    }
    return null;
}