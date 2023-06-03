function execute(key) {
    let response = fetch('https://wap.ebookbao.org/search.php?keyword=+' + key);

    if (response.ok) {
        let doc = response.html();
        const data = [];
        console.log(doc)
		doc.select(".list1 .hot_sale").forEach(e => {
            let author = e.select("p.author a").first().text();
            data.push({
                name: e.select("p.title").first().text(),
                link: "https://wap.ebookbao.org" + e.select(".hot_sale a").first().attr("href"),
                description: author.replace("/","").trim(),
                host: "https://wap.ebookbao.org"
            })
        });

        return Response.success(data);
    }
    return null;
}