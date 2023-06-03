function execute(url,page) {
    if (!page) page = '1';
    let response = fetch("https://wap.ebookbao.org" + url + page + ".html");
    console.log("https://wap.ebookbao.org" + url + page + ".html");

    if (response.ok) {
        let doc = response.html();
        const data = [];

		doc.select("#main .hot_sale").forEach(e => {
            data.push({
                name: e.select("p.title").first().text().replace("《","").replace("》",""),
                link: "https://wap.ebookbao.org" + e.select(".bookinfo a").first().attr("href"),
                cover: "https://wap.ebookbao.org" + e.select(".bookimg img").first().attr("src"),
                description: e.select("p.author").first().text(),
                host: "https://wap.ebookbao.org"
            })
        });
        var next = (parseInt(page)+1).toString();
        return Response.success(data, next)
    }
    return null;
}