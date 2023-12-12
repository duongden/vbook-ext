function execute(key, page) {
    let response = fetch('https://www.idejian.com/search?keyword=' + key,
    {
        headers: {
            'user-agent': UserAgent.desktop()
        }
    });;

    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select(".rank_ullist li").forEach(e => {
            data.push({
                name: e.select(".rank_bkname a").first().text(),
                link: "https://www.idejian.com" + e.select(".rank_bkname a").first().attr("href"),
                description: e.select(".author").first().text(),
                host: "https://www.idejian.com"
            })
        });
        var next = (parseInt(page) + 1).toString();
        return Response.success(data, next)
    }
    return null;
}