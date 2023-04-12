function execute(url) {

    let response = fetch("https://www.dawujiasu.com/" + url);

    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
        doc.select("#BookList li").forEach(e => {
            data.push({
                name: e.select(".name a").first().text(),
                link: e.select(".name a").first().attr("href"),
                cover: e.select(".pic img").attr("src"),
                description: e.select("dl dt i").first().text(),
                host: "http://www.dubuxiaoshuo.com"
            })
        });

        return Response.success(data)
    }
    return null;
}