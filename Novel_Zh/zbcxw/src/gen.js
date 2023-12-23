function execute(url,page) {
    if(!page) page = '1';
    let response = fetch("https://www.zbcxw.cn" + url + page + ".html");
    console.log("https://www.zbcxw.cn" + url + page + ".html")
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select(".con li").forEach(e => {
            data.push({
                name: e.select(".font1 a").first().text(),
                cover: e.select(".freeABoxsLeft img").attr("data-original"),
                link: "https://www.zbcxw.cn" + e.select(".font1 a").first().attr("href"),
                description: e.select(".font2").first().text(),
                host: "https://www.zbcxw.cn"
            })
        });
        let next = (parseInt(page) + 1).toString();
        return Response.success(data,next)
    }
    return null;
}