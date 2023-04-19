function execute(url, page) {
    if (!page) page = '1';
    if (url.slice(-1) !== "/")
        url = url + "/";
    url = url.replace('m.97xiaoshuo.net', 'www.97xiaoshuo.net');
    //console.log(url + page + ".html")
    let response = fetch(url + page);

    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next = doc.select("a:contains(下一页)").first().attr("href").split(/[/ ]+/).pop()
        doc.select("#newscontent li").forEach(e => {
            console.log(doc.select("li"))
            data.push({
                name: e.select(".s2 a").first().text(),
                cover: "https://raw.githubusercontent.com/duongden/vbook/main/nocover.png",
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.97xiaoshuo.net"
            })
        });


        return Response.success(data, next)
    }
    return null;
}