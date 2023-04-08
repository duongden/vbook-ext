function execute(url, page) {
    if (!page) page = '1';

    let response = fetch("https://www.laidudu.org" + url + page + ".html");

    console.log("https://www.laidudu.org" + url + page + ".html")

    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next = doc.select("a:contains(下一页)").first().attr("href").slice(0, -1).split(/[/ ]+/).pop().replace(".html","").replace(".htm","")
        doc.select(".l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: "https://www.laidudu.org" + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.laidudu.org"
            })
        });
        return Response.success(data, next)
    }
    return null;
}