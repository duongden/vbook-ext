function execute(url, page) {
    url = url.replace('m.97xiaoshuo.net', 'www.97xiaoshuo.net');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
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
        return Response.success(data)
    }
    return null;
}