function execute(url, page) {
    if (!page) page = '1';

    let response = fetch(url + page + ".html");
    console.log(url + page + ".html")

    if (response.ok) {
        let doc = response.html();
        const data = [];
        var next = doc.select(".pagination > li.active + li").last().text();

        doc.select(".panel-body .row .col-md-12.b10").forEach(e => {
            data.push({
                name: e.select("h4 a").first().text(),
                link: e.select("h4 a").first().attr("href"),
                description: e.select(".media-info").first().text(),
                host: "http://www.dubuxiaoshuo.com"
            })
        });

        return Response.success(data, next)
    }
    return null;
}