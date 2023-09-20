function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        const data = [];

		doc.select("#newscontent li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text().replace("《","").replace("》",""),
                link: "https://m.ebookbao1.com" + e.select(".s2 a").first().attr("href"),
                description: "Chương mới: " + e.select(".s3 a").first().text(),
                host: "https://m.ebookbao1.com"
            })
        });
        return Response.success(data)
    }
    return null;
}