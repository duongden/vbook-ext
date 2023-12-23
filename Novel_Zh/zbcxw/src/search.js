function execute(key) {
    let response = fetch('https://www.zbcxw.cn/search.php?key=' + key);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select(".leftBox li").forEach(e => {
            data.push({
                name: e.select("h1 a").first().text(),
                cover: e.select(".sCboxBookParL img").attr("data-original"),
                link: "https://www.zbcxw.cn" + e.select("h1 a").first().attr("href"),
                description: e.select(".s2").first().text().replace(/\//g, "").trim(),
                host: "https://www.zbcxw.cn"
            })
        });

        return Response.success(data);
    }
    return null;
}
