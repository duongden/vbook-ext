function execute(key) {
    let response = fetch('https://m.58160.net/search.php?keyword=' + key);

    if (response.ok) {
        let doc = response.html();
        const data = [];
        console.log(doc)
		doc.select(".list1 .hot_sale").forEach(e => {
            let author = e.select(".hot_sale p:nth-child(3)").first().text();
            data.push({
                name: e.select("p.title").first().text(),
                link: "https://m.58160.net" + e.select(".hot_sale a").first().attr("href"),
                description: author,
                host: "https://m.58160.net"
            })
        });
        //body > div.main.transition > div > div > div > div > p:nth-child(3)

        return Response.success(data);
    }
    return null;
}